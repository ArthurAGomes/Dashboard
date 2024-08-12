import ChartOverview from "@/components/chat";
import Sales from "@/components/sales";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Handshake, User } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2  lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de vendas em 90 dias 
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
          <p>R$40.0000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Novos clientes
              </CardTitle>
              <User className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes em 30 dias 
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
          <p>221</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Pedidos Hoje
              </CardTitle>
              <User className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
             Total de pedidos hoje 
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
          <p>87</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Parceiros
              </CardTitle>
              <Handshake className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
             Total de Parceiros
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
          <p>20</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
      <ChartOverview/>
      <Sales/>
      </section>
    </main>
  );
}
