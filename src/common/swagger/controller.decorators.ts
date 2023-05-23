import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeaderOptions,
  ApiHeaders,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

/**
 * @description Swagger wrapper for POST actions.
 * @param dto for request.
 * @param entity as an example of response.
 * @param description as description of the response data in a sentence.
 * @param summary that describes particular endpoint in.
 * @param access requirements for permissions.
 * @constructor
 */
export function ApiPost(
  dto?,
  entity?,
  description?: string,
  summary?: string,
  access?: {
    required: boolean;
    permissions: string[];
  },
  customHeaders: ApiHeaderOptions[] = [],
) {
  const headers = [
    // {
    //   name: 'Authorization',
    //   example: 'Bearer <access_token>...',
    //   description: `Permissions: ${
    //     access && access.permissions ? access.permissions.join(', ') : 'Public'
    //   }`,
    //   required: access ? access.required : false,
    // },
  ];

  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiBody(
      typeof dto === 'object'
        ? dto
        : {
            type: dto,
          },
    ),
    ApiHeaders([...headers, ...customHeaders]),
    ApiOperation({ summary: summary }),
    ApiCreatedResponse({
      description: 'Returns: ' + description,
      type: entity,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}

/**
 * @description Swagger wrapper for GET actions
 * @param response
 * @param description as description of the response data in a sentence.
 * @param summary that describes particular endpoint in.
 * @param access requirements for permissions.
 * @constructor
 */
export function ApiGet(
  response?,
  description?: string,
  summary?: string,
  access?: {
    required: boolean;
    permissions: string[];
  },
  customHeaders: ApiHeaderOptions[] = [],
) {
  const headers = [
    // {
    //   name: 'Authorization',
    //   example: 'Bearer <access_token>...',
    //   description: `Permissions: ${
    //     access && access.permissions ? access.permissions.join(', ') : 'Public'
    //   }`,
    //   required: access ? access.required : false,
    // },
  ];

  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiHeaders([...headers, ...customHeaders]),
    ApiOperation({ summary: summary }),
    ApiOkResponse({
      description: 'Returns: ' + description,
      type: response,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}

/**
 * Swagger wrapper for GET customer actions.
 * @param entity as an example of response.
 * @param description as description of the response data in a sentence.
 * @param summary that describes particular endpoint in.
 * @constructor
 */
export function ApiGetCustomers(
  entity?,
  description?: string,
  summary?: string,
) {
  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiHeaders([
      // {
      //   name: 'Authorization',
      //   description: 'Bearer <access_token>...',
      //   required: false,
      // },
    ]),
    ApiOperation({ summary: summary }),
    ApiResponse({
      status: 200,
      description: 'Returns: ' + description,
      type: entity,
    }),
    ApiUnprocessableEntityResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}

/**
 * Swagger wrapper for GET order actions.
 * @param entity as an example of response.
 * @param description as description of the response data in a sentence.
 * @param summary that describes particular endpoint in.
 * @constructor
 */
export function ApiGetOrders(
  entity?,
  description?: string,
  summary?: string,
  customHeaders: ApiHeaderOptions[] = [],
) {
  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiHeaders([
      {
        name: 'Authorization',
        description: 'Bearer <access_token>...',
        required: false,
      },
      ...customHeaders,
    ]),
    ApiOperation({ summary: summary }),
    ApiResponse({
      status: 200,
      description: 'Returns: ' + description,
      type: entity,
    }),
    ApiUnprocessableEntityResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}

/**
 * Swagger wrapper for DELETE actions
 * @param dto
 * @param entity
 * @param description
 * @param summary
 * @constructor
 */
export function ApiDelete(
  dto?,
  entity?,
  description?: string,
  summary?: string,
) {
  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiOperation({ summary: summary }),
    ApiBody({
      type: dto,
    }),
    ApiResponse({
      status: 200,
      description: 'Return: ' + description,
      type: entity,
    }),
    ApiCreatedResponse({
      description: 'Returns: ' + description,
      type: entity,
    }),
    ApiUnprocessableEntityResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}

/**
 * Swagger wrapper for PATH actions
 * @param dto for request.
 * @param entity as an example of response.
 * @param description as description of the response data in a sentence.
 * @param summary that describes particular endpoint in.
 * @constructor
 */
export function ApiPatch(
  dto?,
  entity?,
  description?: string,
  summary?: string,
) {
  return applyDecorators(
    ApiSecurity('bearerAuth'),
    ApiOperation({ summary: summary }),
    ApiBody({
      type: dto,
    }),
    ApiResponse({
      status: 200,
      description: 'Returns: ' + description,
      type: entity,
    }),
    ApiUnprocessableEntityResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Unauthorized Request' }),
  );
}
