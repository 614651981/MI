window.onload=function(){
	
//侧导航开始

	let aside=$('.aside')[0];
	let asideli=aside.getElementsByTagName('li');
	let item=aside.getElementsByClassName('item');
	// console.log(item)
		
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseover=function(){
			item[i].style.display='block';
		}
		asideli[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}

	let imglist=$('.img-list')[0];
	let imglistli=imglist.getElementsByTagName('li');
	let btnlist=$('.btn-list')[0];
	let btnlistli=btnlist.getElementsByTagName('li');
	let imgwidth=parseInt(getComputedStyle(imglist,null).width);
	let next=0;
	let now=0;
	
	btnlistli[0].style.background='#fff';
//鼠标点击btn 换图片，图片轮播用第一种方式时：	
	// for(let i=0;i<btnlistli.length;i++){
	// 	btnlistli[i].onclick=function(){
		
	// 	//所有消失，对应显示
	// 		for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 		}
			
	// 		imglistli[i].style.display='block';
	// 		btnlistli[i].style.background='#fff';
	// 		num=i;
	// 	}
	// }
//鼠标点击btn 换图片，图片轮播用第二种方式时：
//now 当前图片
//i 点击按钮所对应图片，相当于下一张图片
	for(let i=0;i<btnlistli.length;i++){
		btnlistli[i].onclick=function(){
			if(now == i){return};
			btnlistli[now].style.background='';
			btnlistli[i].style.background='#fff';
			imglistli[i].style.left=imgwidth+'px';
			animate(imglistli[now],{left:-imgwidth});
			animate(imglistli[i],{left:0});
			now=next=i;
		}
	}

//时间函数  图片轮播

//图片轮播第一种方式  所有隐藏，再显示当前图片
	// let t=setInterval(move,3000);
	// let num=0;
	// function move(){
	// 	num++;
	// 	if(num==imglistli.length){
	// 		num=0;
	// 	}
	// 	for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 		}
			
	// 		imglistli[num].style.display='block';
	// 		btnlistli[num].style.background='#fff';
	// }
	// function moveL(){
	// 	num--;
 //   		if(num<0){
	// 		num=imglistli.length-1;
	// 	}
	// 	for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 	}
			
	// 		imglistli[num].style.display='block';
	// 		btnlistli[num].style.background='#fff';
	// }

//图片轮播第二种方式 
	//点击右边 
	//now当前图片位置(0,0)
	//next下一张图片位置(imgwidth,0)
	//now(0,0)--> (-imgwidth,0)
	//next(imgwidth,0)-->now (0,0)
	//更新 now=next;
	//用now 、next轮播时,在CSS中需要将图片定位的位置都改为left(100%),第一张图片left(0)
	
	t=setInterval(move,3000);
	function move(){
		next++;
		if(next==imglistli.length){
			next=0;
		}
		btnlistli[now].style.background='';
		btnlistli[next].style.background='#fff';
		imglistli[next].style.left=`${imgwidth}px`;
		animate(imglistli[now],{left:-imgwidth});
		animate(imglistli[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	function moveL(){
		next--;
		if(next<0){
			next=imglistli.length-1;
		}
		btnlistli[now].style.background='';
		btnlistli[next].style.background='#fff';
		imglistli[next].style.left=`${-imgwidth}px`;
		animate(imglistli[now],{left:imgwidth});
		animate(imglistli[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}


//鼠标移入停止轮播
	let banner=$('.banner')[0];	
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}

// //点击左右箭头换图片，自动轮播用第一种方法时
//    let btnleft=$('.btn-left')[0];
//    let btnright=$('.btn-right')[0];
  
//    btnright.onclick=function(){
//    		move();
   		
//    }
//     btnleft.onclick=function(){
//    		moveL();
//    }
//点击左右箭头换图片，自动轮播用第二种方法时
   let btnleft=$('.btn-left')[0];
   let btnright=$('.btn-right')[0];
   let flag=true;
   btnright.onclick=function(){
   	if(!flag){
			return;
		}
   		move();
   		flag=false;
   }
    btnleft.onclick=function(){
   		moveL();
   }

//小米明星单品
	let starlist=$('.star-list')[0];
	let moreleft=$('.more-left')[0];
	let morezuo=moreleft.getElementsByTagName('a')[0];
	let moreright=$('.more-right')[0];
	let moreyou=moreright.getElementsByTagName('a')[0];
	console.log(moreright)
	
	let tt1=setInterval(starmovel,3000);
	let tt2=setInterval(starmoveR,6000);

	moreleft.onclick=function(){
		morezuo.style.color='#ff6700';
		moreyou.style.color='';
		starlist.style.marginLeft='0px';
		starlist.style.transition='all ease 1s';
		morezuo.style.transition='all ease 1s';
		// clearInterval(tt1);
		
	}
	moreright.onclick=function(){
		starlist.style.marginLeft='-1240px';
		moreyou.style.color='#ff6700';
		morezuo.style.color='';
		starlist.style.transition='all ease 1s';
		moreyou.style.transition='all ease 1s';
		// clearInterval(tt2);
	}



	function starmovel(){
		morezuo.style.color='#808080';
		moreyou.style.color='#b0b0b0';
		animate(starlist,{marginLeft:'-1240px'});
		starlist.style.transition='all ease 1s';
	}
	function starmoveR(){
		moreyou.style.color='#808080';
		morezuo.style.color='#b0b0b0';
		animate(starlist,{marginLeft:'0'});
		starlist.style.transition='all ease 1s';
	}
	

}

