// index.d.ts
declare module '@yahoo_warraich/postal' {
    export class Client {
        constructor(host: string, serverKey: string);
        makeRequest(controller: string, action: string, parameters: any): Promise<any>;
    }

    export class Message {
        constructor(client: Client, attributes: MessageAttributes);
        id(): string;
        token(): string;
    }

    interface MessageAttributes {
        id: string;
        token: string;
    }

    export class SendMessage {
        constructor(client: Client);
        to(address: string): void;
        cc(address: string): void;
        bcc(address: string): void;
        from(address: string): void;
        sender(address: string): void;
        subject(subject: string): void;
        tag(tag: string): void;
        replyTo(replyTo: string): void;
        plainBody(content: string): void;
        htmlBody(content: string): void;
        header(key: string, value: string): void;
        attach(filename: string, contentType: string, data: string | Buffer): void;
        send(): Promise<SendResult>;
    }

    export class SendRawMessage {
        constructor(client: Client);
        mailFrom(address: string): void;
        rcptTo(address: string): void;
        data(content: string): void;
        send(): Promise<SendResult>;
    }

    export class SendResult {
        constructor(client: Client, result: any);
        recipients(): { [key: string]: Message };
        size(): number;
    }
}