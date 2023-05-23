## Description

## Installation

```bash
$ npm install
```

## Vault configuring

In container console.
```bash
$ vault auth enable approle
$ vault policy write whitebitservice - <<EOF path "secret/data/whitebit" { capabilities = ["read"] } EOF
$ vault write auth/approle/role/whitebitservice policies=whitebitservice
$ vault read auth/approle/role/whitebitservice/role-id
$ vault write -f auth/approle/role/whitebitservice/secret-id
```

Update .env in whitebit-service
```bash
VAULT_ROLE_ID=role_id
VAULT_SECRET_ID=secret_id
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
