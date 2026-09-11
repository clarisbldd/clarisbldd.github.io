
document.querySelectorAll('.menu').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const links=document.querySelector('.nav-links');
    links.style.display = links.style.display==='flex' ? '' : 'flex';
    if(links.style.display==='flex'){
      links.style.position='absolute'; links.style.top='68px'; links.style.left='0'; links.style.right='0';
      links.style.background='#fff'; links.style.padding='18px 4%'; links.style.flexDirection='column'; links.style.borderBottom='1px solid #e7ebf3';
    }
  });
});
