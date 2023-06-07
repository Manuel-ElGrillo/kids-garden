import { IsNotEmpty, IsString, IsEmail, MaxLength } from "class-validator";
import { CreateInquiryRequest } from "../../../domain";

export class CreateInquiryDTO implements CreateInquiryRequest{

    @IsString({message: 'Client Name is a String', each: false})
    @IsNotEmpty({message: "Client Name couldn't be empty"})
    clientName: string;

    @IsString({message: 'Client Surname is a String'})
    @IsNotEmpty({message: "Client Surname couldn't be empty"})
    clientSurname: string;

    @IsEmail()
    @IsNotEmpty({message: "Client Email couldn't be empty"})
    clientEmail: string;
    
    @IsString({message: 'Client Phone is a String'})
    @IsNotEmpty({message: "Client email couldn't be empty"})
    clientPhone: string;

    @IsString({message: 'Client Inquiry is a String'})
    @IsNotEmpty({message: "Client Inquiry couldn't be empty"})
    @MaxLength(255, {message: 'Client Inquiry have a max length of 255 characters'})
    clientInquiry: string;

    @IsString({message: 'Inquiry Type is a String'})
    @IsNotEmpty({message: "Inquiry Type couldn't be empty"})
    inquiryType: string;

}