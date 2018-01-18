var format_t = function(time, format){
	var t_er = new Date(time);
	var tf_er = function(i){return (i < 10 ? '0' : "") + i};
		return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
		switch(a){
		case 'yyyy':
		return tf_er(t_er.getFullYear());
		break;
		case 'MM':
		return tf_er(t_er.getMonth() + 1);
		break;
		case 'mm':
		return tf_er(t_er.getMinutes());
		break;
		case 'dd':
		return tf_er(t_er.getDate());
		break;
		case 'HH':
		return tf_er(t_er.getHours());
		break;
		case 'ss':
		return tf_er(t_er.getSeconds());
		break;
		}
	})
}
//格式format_t('Thu Aug 22 2013 15:12:00 GMT+0800', 'yyyy-MM-dd HH:mm:ss')
function formatDate(now){
	var   dd=new Date(now)     
    var   year=dd.getFullYear();     
    var   month=dd.getMonth()+1;     
    var   date=dd.getDate();     
    var   hour=dd.getHours();     
    var   minute=dd.getMinutes();     
    var   second=dd.getSeconds();     
    return   year+"-"+month+"-"+date     
}  
//格式formatDate(1513180800000)
