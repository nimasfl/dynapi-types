export class Credential {
  constructor(
    url: string,
    username: string,
    password: string,
    domain: string,
    version?: string,
    workstation?: string
  );
  url: string;
  username: string;
  password: string;
  domain: string;
  version?: string;
  workstation?: string;
}

export interface SingleSelectQueryBuilder {
  send(subPath?: string): Promise<DynamicsFindOneResponse>;
}

export interface MultiSelectQueryBuilder {
  select(...fields: string[]): MultiSelectQueryBuilder;

  top(count: number): MultiSelectQueryBuilder;

  count(count: number): MultiSelectQueryBuilder;

  filter(filterExpression: string): MultiSelectQueryBuilder;

  order(orderExpression: string, isDesc?: boolean): MultiSelectQueryBuilder;

  fetch(fetchXmlExpression: string): MultiSelectQueryBuilder;

  send(subPath?: string): Promise<DynamicsFindMultipleResponse>;
}

export type DynamicsRecord = {
  [property: string]: any
}

export interface UpdateQueryBuilder {
  set(data: any): UpdateQueryBuilder | CreateQueryBuilder;

  send(subPath?: string): Promise<DynamicsResponse>;
}

export interface CreateQueryBuilder {
  set(data: any): UpdateQueryBuilder | CreateQueryBuilder;

  send(subPath?: string): Promise<DynamicsResponse>;
}

export interface DeleteQueryBuilder {
  send(subPath?: string): Promise<DynamicsResponse>;
}

export interface DynamicsFindMultipleResponse {
  status: Boolean,
  statusCode: Number,
  data: DynamicsRecord[],
  rawMessage: String
  message: {
    fa: string,
    en: string
  }
}

export interface DynamicsFindOneResponse {
  status: Boolean,
  statusCode: Number,
  data: DynamicsRecord,
  rawMessage: String
  message: {
    fa: string,
    en: string
  }
}

export interface DynamicsResponse {
  status: Boolean,
  statusCode: Number,
  data: any,
  rawMessage: String
  message: {
    fa: string,
    en: string
  }
}

export class QueryBuilder {
  constructor(credential: Credential);

  create(entitySetName: string): CreateQueryBuilder;

  update(entitySetName: string, id: string): UpdateQueryBuilder;

  delete(entitySetName: string, id: string): DeleteQueryBuilder;

  get(entitySetName: string, id?: string): SingleSelectQueryBuilder | MultiSelectQueryBuilder;

  execute(actionName: string, method: string, entitySetName: string, id: string): CreateQueryBuilder;
}

export function RequestHandler (query: QueryBuilder | MultiSelectQueryBuilder | SingleSelectQueryBuilder | UpdateQueryBuilder | CreateQueryBuilder | DeleteQueryBuilder): Promise<Response>;


