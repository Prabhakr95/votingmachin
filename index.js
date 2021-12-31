let bjp = document.getElementById('bjp')
let c1 = document.createElement('span');
bjp.appendChild(c1)

console.log(bjp)
let congress = document.getElementById('congress');
let c2 = document.createElement('span');
congress.appendChild(c2)

let mns = document.getElementById('mns');
let c3 = document.createElement('span');
mns.appendChild(c3)
let count1 = 0;
let count2 = 0;
let count3 = 0;
let b3 = document.getElementById('header');
let thanks = document.createElement('p');
b3.appendChild(thanks)
function onclick1() {

    if (bjp.onclick) {
        count1 += 1;
        //c1.innerHTML = count1;

        thanks.innerHTML = 'thanks for voting'


    }

    console.log(count1)
}
function onclick2() {

    if (bjp.onclick) {
        count2 += 1;
        console.log('clicked')
      //  c2.innerHTML = `<br> no of votes got <br> ${count2}`;

        thanks.innerHTML = 'thanks for voting'
    }

    return count2;
}
function onclick3() {

    if (bjp.onclick) {
        count3 += 1;
      //  c3.innerHTML = count3;
        console.log('clicked')
    }

    return count3
}

let sub = document.getElementById('btn');
let bg = document.createElement('p');

sub.appendChild(bg)
sub.addEventListener('click',function(){
    console.log('clicked for votes')
    bg.innerHTML = `no.of votes got by BJP is ${count1} <br>
                     no.of votes got by congress is ${count2} <br>
                     no.of votes got by MNS is ${count3}`

})