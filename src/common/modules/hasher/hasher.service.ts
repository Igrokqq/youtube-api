import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import HasherConfig from 'src/common/config/hasher';

@Injectable()
export default class HasherService {
  constructor(private readonly config: HasherConfig) {}

  hash(data = '', saltOrRounds = 10): Promise<string> {
    return bcrypt.hash(data, saltOrRounds);
  }

  compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }

  uuid(): string {
    return crypto.randomUUID();
  }

  encryptAES256CBC(utf8String: string, key?: string, iv?: string): string {
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      key ?? this.config.key,
      iv ?? this.config.iv,
    );
    let encryptedData = cipher.update(utf8String, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
  }

  decryptAES256CBC(hexString: string, key?: string, iv?: string): string {
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      key ?? this.config.key,
      iv ?? this.config.iv,
    );
    let decryptedData = decipher.update(hexString, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
  }
}
