import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales(){
    return(
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas  
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153244771?v=4" className="rounded-full"/>
                        <AvatarFallback>Arthur</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:textbase font-semibold">Arthur Amorim</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">arthur21120@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_E5_O3TGK9a6tBFv_yQm7ecFdnbMIA3Eag&s" className="rounded-full"/>
                        <AvatarFallback>Arthur</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:textbase font-semibold">Neymar</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">neymar120@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/LeBron_James_and_Kevin_Love_%28cropped%29.jpg/640px-LeBron_James_and_Kevin_Love_%28cropped%29.jpg" className="rounded-full"/>
                        <AvatarFallback>Arthur</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:textbase font-semibold">Lebron James</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Lebron@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}