/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["root__get"];
  };
}

export interface components {
  schemas: {
    /** Message */
    Message: {
      /** Message */
      message: string;
      /**
       * Date
       * Format: date-time
       */
      date: string;
      type: components["schemas"]["Type"];
    };
    /**
     * Type
     * @description An enumeration.
     * @enum {undefined}
     */
    Type: 1 | 2 | 3;
  };
}

export interface operations {
  root__get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Message"];
        };
      };
    };
  };
}

export interface external {}
