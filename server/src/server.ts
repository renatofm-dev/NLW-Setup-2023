//Back-and API RESTful
import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";
import localtunnel from 'localtunnel';
const app = Fastify();


app.register(cors)
app.register(appRoutes)



app
.listen({
	host: '192.168.1.4',
	port: 3333,
})
.then(async () => {
	const tunnel = await localtunnel({
		local_host: '192.168.1.4',
		port: 3333,
		subdomain: 'rfmapihabits',
	});

	console.log('HTTP Server Running!');
});