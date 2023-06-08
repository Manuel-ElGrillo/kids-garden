import { Observable } from 'rxjs';

import { CreateInquiryRequest } from "../interfaces/requests";
import { InquiryModel } from "../models";
import { InquiryResponse } from '../interfaces';

export interface InInquiryService {
    createInquiry(inquery: CreateInquiryRequest): Observable<InquiryResponse>
}