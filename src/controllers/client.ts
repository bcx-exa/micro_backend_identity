import { Controller, Put, Path, Response, SuccessResponse, Delete, Get, Body, Post, Route, Tags, Query } from "tsoa";
import { InternalServerError } from '../types/response_types';
import { ClientService } from "../services/client";
import { ClientPost } from "../types/client";

@Route("client") // route name => localhost:xxx/SignUp
@Tags("Clients") // => Under SignUpController tag
export class ClientController extends Controller {   
    @Response<InternalServerError>("Oauth Client API Internal Server Error")
    @SuccessResponse("201", "Created") // Custom success response
    @Get("{clientName}") //specify the request type
    //@Security('jwt')
    async GetClient(@Path() clientName: string): Promise<any> {
        return new ClientService().getClient(clientName); 
    }
    
    @Response<InternalServerError>("Oauth Client API Internal Server Error")
    @SuccessResponse("201", "Created") // Custom success response
    @Get() //specify the request type
    //@Security('jwt')
    async GetClients(): Promise<any> {
        return new ClientService().getClients(); 
    }
    
    @Response<InternalServerError>("Oauth Client API Internal Server Error")
    @SuccessResponse("201", "Created") // Custom success response
    @Post() //specify the request type
    //@Security('jwt')
    async CreateClient(@Body() body: ClientPost ): Promise<any> {
        return new ClientService().createClient(body); 
    }

    @Response<InternalServerError>("Oauth Client API Internal Server Error")
    @SuccessResponse("201", "Created") // Custom success response
    @Put() //specify the request type
    //@Security('jwt')
    async UpdateClient(@Body() body: ClientPost ): Promise<any> {
        return new ClientService().updateClient(body); 
    }

    @Response<InternalServerError>("Oauth Client API Internal Server Error")
    @SuccessResponse("201", "Created") // Custom success response
    @Delete("{clientName}") //specify the request type
    //@Security('jwt')
    async DeleteClient(@Path() clientName: string, @Query() softDelete = true): Promise<any> {
        return new ClientService().deleteClient(clientName, softDelete); 
    }
}
