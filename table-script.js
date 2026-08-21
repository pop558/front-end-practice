//新增数据函数
function addRow(){
    let table=document.getElementById('table');
//获取插入位置
    let length=table.rows.length;
//插入行节点
    let newRow=table.insertRow(length);
//插入列节点对象Row
    let namecol=newRow.insertCell(0);
    let numbercol=newRow.insertCell(1);
    let nactioncol=newRow.insertCell(2);
//修改节点文本内容
    namecol.innerHTML='未命名';
    numbercol.innerHTML='未知号码';
    nactioncol.innerHTML='<button>编辑</button> <button onclick="deleteRow(this)">删除</button>';
}
// addimformation();
// 删除函数
// 传入按钮->按钮的父节点是td（元素）元素的父节点是tr（行）；我们删除的是行，也就是行元素父节点的removeChild；
// log输出函数的作用是确认接口的准确性；
function deleteRow(button){
    // let delete=document.getElementById('table');
    // let length=table.rows.length;
    // let deleteRow=delete(length);
    console.log(button);
   // let row=document.getElementsByTagName('button');
    let father_row=button.parentNode.parentNode;
    console.log(father_row);
    father_row.parentNode.removeChild(father_row);
    
}
//编辑函数->定位按钮元素的父级元素为td他的父级元素是tr->用了promt弹窗（有返回值的弹窗）改变元素
//整体思想还是：定位-改变（增加，编辑，删除）
function editRow(button){
    let grandfather_row=button.parentNode.parentNode;
    let name = grandfather_row.cells[0];
    let phone = grandfather_row.cells[1];
    let inputname=prompt('请输入姓名：',name.innerHTML);
    if(inputname){
        name.innerHTML=inputname;
    let inputphone=prompt('请输入号码：',phone.innerHTML);
        if(inputphone){
            phone.innerHTML=inputphone;
    }
    }
    // let grandfather_row=button.parentNode.parentNode;
    // let name = grandfather_row.cells[0];
    // let phone = grandfather_row.cells[1];
    // let inputname=prompt('请输入姓名：');
    // if(inputname){
    //     name.innerHTML=inputname;
    //     let inputphone=prompt('请输入号码：');
    //     if(inputphone){
    //         phone.innerHTML=inputphone;
    //     }
    //}

}
