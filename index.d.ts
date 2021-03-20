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

export interface SingleSelectQueryBuilder {}
export interface MultiSelectQueryBuilder {}
export interface UpdateQueryBuilder {}
export interface CreateQueryBuilder {}
export interface DeleteQueryBuilder {}
export interface Response {
  status: Boolean,
  statusCode: Number,
  data: any,
  headers: Object,
  rawMessage: String
}

export class QueryBuilder {
  constructor(credential: Credential);

  create(entitySetName: string): CreateQueryBuilder;

  update(entitySetName: string, id: string): UpdateQueryBuilder;

  delete(entitySetName: string, id: string): DeleteQueryBuilder;

  get(entitySetName: string, id?: string): SingleSelectQueryBuilder | MultiSelectQueryBuilder;

  execute(actionName: string, method: string, entitySetName: string, id: string): QueryBuilder;

  select(...fields: string[]): MultiSelectQueryBuilder;

  top(count: number): MultiSelectQueryBuilder;

  count(count: number): MultiSelectQueryBuilder;

  filter(filterExpression: string): MultiSelectQueryBuilder;

  order(orderExpression: string, isDesc?: boolean): MultiSelectQueryBuilder;

  fetch(fetchXmlExpression: string): MultiSelectQueryBuilder;

  set(data: any): UpdateQueryBuilder | CreateQueryBuilder;

  send(subPath): Promise<any>;
}

export function RequestHandler (query: QueryBuilder | MultiSelectQueryBuilder | SingleSelectQueryBuilder | UpdateQueryBuilder | CreateQueryBuilder | DeleteQueryBuilder): Promise<Response>;

