import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { InquiryModel } from "../../domain";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    inqueryMail(inquiryData: InquiryModel): void {
        this.mailerService.sendMail({
            to: inquiryData.clientEmail,
            subject: "Consulta",
            html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                        padding: 20px;
                    }

                    h1 {
                        color: #333;
                    }

                    p {
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <h1>Hola ${inquiryData.clientName} ${inquiryData.clientSurname}</h1>
                <p>Gracias por tu consulta.</p>
            
                <h2>Informacion de la consulta:</h2>
                <p><strong>Nombre:</strong> ${inquiryData.clientName}</p>
                <p><strong>Apellido:</strong> ${inquiryData.clientSurname}</p>
                <p><strong>Correo:</strong> ${inquiryData.clientEmail}</p>
                <p><strong>Telefono:</strong> ${inquiryData.clientPhone}</p>
                <p><strong>Tipo de consulta:</strong> ${inquiryData.inqueryType}</p>
                <p><strong>Consulta:</strong> ${inquiryData.clientInquiry}</p>
            </body>
            </html>
                `
        })
    }
}