
//たたかうボタンプッシュ時の処理
function battleBTN_pushed(){
	$("#todomenu").css("visibility","visible");
	$("#todomenu").empty();//emptyで子要素の削除
	
	// for(var i:number=0; i < todo.length; i++){
	// 	$("#todomenu").append("<li>" + todo[i] + "</li>");
	// }
	$("#todomenu").append("<li>TODOTODOTODO</li>");
}

//逃げるボタンプッシュ時の処理
function escapeBTN_pushed(){
	$("#todomenu").css("visibility","visible");
	$("#todomenu").empty();//emptyで子要素の削除
	$("#todomenu").append("<li>ToDoからは　にげられない</li>");
}

//防御ボタンプッシュ時の処理
function itemBTN_pushed(){
	$("#todomenu").css("visibility","visible");
	$("#todomenu").empty();//emptyで子要素の削除
// 	$("#todomenu").append("<li>しかし回り込まれてしまった。</li>");
}

//道具ボタンプッシュ時の処理
function magicBTN_pushed(){
	$("#todomenu").css("visibility","visible");
	$("#todomenu").empty();//emptyで子要素の削除
	$("#todomenu").append("<li>ゆうしゃは　メラゾーマをとなえた。</li>");
	$("#todomenu").append("<li>しかし　なにもおきなかった</li>");
}