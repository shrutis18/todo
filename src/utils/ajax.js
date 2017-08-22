import Ajax from 'simple-ajax';

export default function({url ="",method="post",data={},failHook,sucessHook}) {
    const aj = new Ajax({
        url,method,
        data: (JSON.stringify(data))
    });
    console.log(data);
    console.log("hhhhhhh",url);
    aj.on('success',(e) => {

    });

    aj.on('error',(e) => {
        failHook && failHook(e.target.response)
    });

    aj.on('complete',(e) => {
         sucessHook && sucessHook(JSON.parse(e.target.response));
    });
        aj.send();
}
