const btc = document.getElementById('btc')
const consulta = document.getElementById('consulta')

const api = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function consultar(){
    const response = await api.get();
    console.log(response.data.ticker.high);
    btc.innerHTML = response.data.ticker.high;
}

consulta.onclick = ()=>{
    consultar();
};

// const infos = consultar();
// const resultado = parseFloat(infos.toFixed(2));

// consulta.onclick = ()=>{
//   resultado();
// essa seria minha ideia pra resolver o problema das casa decimais, mas não sei se funcionaria