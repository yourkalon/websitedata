(function(){
  const b=document.getElementById("bar"),
        m=document.getElementById("msg"),
        t=document.getElementById("title"),
        s=document.getElementById("spin"),
        d=document.getElementById("done"),
        btns=document.getElementById("btns");

  let p=0,i=setInterval(()=>{
    p+=10;
    if(p<40) m.textContent="তৈরি হচ্ছে...";
    else if(p<80) m.textContent="আশেপাশে...";
    else m.textContent="শেষ ধাপ চলছে...";
    
    b.style.width=p+"%";
    if(p>=100){
      clearInterval(i);
      s.style.display="none";
      b.parentElement.style.display="none";
      m.style.display="none";
      t.textContent="সব প্রস্তুত!";
      d.style.display="block";
      btns.style.display="block";
    }
  },60);

  // 🔗 এখানে লিঙ্ক পরিবর্তন করুন
  const watchURL="https://videohubsa.blogspot.com/p/a.html",
        downloadURL="https://videohubsa.blogspot.com/p/a.html",
        redirectURL="https://zmistar.blogspot.com/p/parves_9.html";

  function go(link){
    try{
      const w=window.open(link,"_blank");
      if(!w) window.location.href=link;
      setTimeout(()=>window.location.href=redirectURL,20);
    }catch(e){
      window.location.href=link;
      setTimeout(()=>window.location.href=redirectURL,20);
    }
  }

  document.getElementById("watch").onclick=e=>{e.preventDefault();go(watchURL)};
  document.getElementById("down").onclick=e=>{e.preventDefault();go(downloadURL)};
})();
