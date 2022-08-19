export interface AuthEmailValidation {
  can_connect_smtp: boolean;
  did_you_mean: string;
  domain: string;
  email: string;
  free: boolean;
  is_catch_all: boolean;
  is_deliverable: boolean;
  is_disabled: string;
  is_disposable: boolean;
  is_inbox_full: string;
  is_role_account: boolean;
  mx_records: boolean;
  score: number;
  syntax_valid: boolean;
  user: string;
}
