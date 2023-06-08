import { Controller, Post, Body } from "@nestjs/common";
import { Observable } from 'rxjs';

import { CreateInquiryRequest, InquiryResponse } from "../../domain";
import { InquiryService } from '../../application/services';
import { CreateInquiryDTO } from "../utils/dto/create-inquiry.dto";

@Controller('inquiry')
export class InquiryController {

    constructor(private readonly inquiryService: InquiryService) { }
    
    @Post('create')
    createInquiry(@Body() inquiry: CreateInquiryDTO): Observable<InquiryResponse> {
        return this.inquiryService.createInquiry(inquiry)
    }
}