const items=document.querySelectorAll('.deadline-format h4');
const futureDate=new Date('2024-02-22T08:00:00');
const futureTime=futureDate.getTime();

function getRemainingTime(){
    const today=new Date().getTime();
    const t=futureTime-today;
    if(t<=0){
        clearInterval(countdown);
        document.querySelector('.giveaway').textContent='Sorry,this giveaway has expired!';
        items.forEach(item=>item.textContent='00');
        return;
    }
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;

    let days=Math.floor(t/oneDay);
    let hours=Math.floor((t%oneDay)/oneHour)
    let minutes=Math.floor((t%oneHour)/oneMinute);
    let seconds=Math.floor((t%oneMinute)/1000);

    const values=[days,hours,minutes,seconds];
    const format=(item)=>(item<10 ?`0${item}`:item);
    items.forEach((item,index)=>{
        item.textContent=format(values[index]);
    })

}
let countdown=setInterval(getRemainingTime,1000);
getRemainingTime();