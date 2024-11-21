import { PagingRequest } from "./common.model";

export interface FormSubmission {
  date: string;
  submittedBy: {
    name: string;
    email: string;
  };
  order: number;
  name: string;
  id: string;
  submissionCount?: number;
}

export interface FormSubmissionRequest extends PagingRequest {
  searchKeyword?: string;

  shopId?: string;
}
export interface FormSubmissionListForm extends FormSubmissionRequest {}
