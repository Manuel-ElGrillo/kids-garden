import { Module } from '@nestjs/common';
import { PostgreDatabaseModule } from '../infrastructure/database';
import { InquiryService } from './services';
import { MailService } from './helpers';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            }
        }),
        PostgreDatabaseModule],
    providers: [InquiryService, MailService],
    exports: [InquiryService, MailService],
})
export class ApplicationModule {}
