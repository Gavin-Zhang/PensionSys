;var clienttmpl = "\r\n\r\n" +
"	<table width='795' border='0' cellpadding='0' cellspacing='0' style='page-break-after:always'>\r\n\r\n" +
"		<col width='123.00'/>\r\n" +
"		<col width='68'/>\r\n" +
"		<col width='36.00'/>\r\n" +
"		<col width='72.00'/>\r\n" +
"		<col width='26'/>\r\n" +
"		<col width='65'/>\r\n" +
"		<col width='19'/>\r\n" +
"		<col width='63.00'/>\r\n" +
"		<col width='55'/>\r\n" +
"		<col width='115'/>\r\n" +
"		<col width='153'/>\r\n" +
"		<col width='81'/>\r\n" +
"		<tr height='30.00'>\r\n" +
"			<td height='30.00' width='795' colspan='11' class='indexSet'>No:{{= d.Idx}}</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='51.00'>\r\n" +
"			<td height='51.00' width='795' colspan='11' class='titleSet'>居家和社区养老服务对象登记表</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='38.33'>\r\n" +
"			<td class='xl67' height='38.33' colspan='11'></td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet'>\r\n" +
"			<td height='35' class='borderSet layui-font-16'>姓名</td>\r\n" +
"			<td colspan='2' class='borderSet layui-font-16'>{{= d.Name}}</td>\r\n" +
"			<td colspan='2' class='borderSet layui-font-16'>性别</td>\r\n" +
"			<td colspan='2' class='borderSet layui-font-16'>{{= d.Sex || ''}}</td>\r\n" +
"			<td colspan='2' class='borderSet layui-font-16'>年龄</td>\r\n" +
"			<td class='borderSet  layui-font-16'>{{= d.Age || ''}}</td>\r\n" +
"			{{# if(d.AvatarPath === '') { }}\r\n" +
"			<td rowspan='5' class='borderSet  layui-font-16'>照<br/>片</td>\r\n" +
"			{{#  } else { }}\r\n" +
"			<td rowspan='5' class='borderSet  layui-font-16'>\r\n" +
"				<img src={{ d.AvatarPath }} style='height:164px;width:118px' id='demo1'>\r\n" +
"			</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet'>\r\n" +
"			<td height='35'  class='borderSet layui-font-16'>身份证号</td>\r\n" +
"			<td colspan='9'  class='borderSetLeftAlign layui-font-16'>\r\n" +
"				&nbsp;&nbsp;&nbsp;&nbsp;{{= d.ChinaId || ''}}\r\n" +
"			</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet'>\r\n" +
"			<td height='35' class='borderSet layui-font-16'>联系电话</td>\r\n" +
"			<td colspan='3' class='borderSet layui-font-16'>{{= d.Phone || ''}}</td>\r\n" +
"			<td colspan='4' class='borderSet layui-font-16'>所属社区/村委</td>\r\n" +
"			<td colspan='2' class='borderSet layui-font-16'>{{= d.Community || ''}}</td>\r\n" +
"		</tr>\r\n" +
"			<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td height='35' class='borderSet layui-font-16'>家庭住址</td>\r\n" +
"			<td colspan='9' class='borderSetLeftAlign layui-font-16'>\r\n" +
"				&nbsp;&nbsp;&nbsp;&nbsp;{{= d.Addr || ''}}\r\n" +
"			</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td height='35' class='borderSet layui-font-16'>客户类型</td>\r\n" +
"			<td colspan='9' class='borderSetLeftAlign layui-font-16'>\r\n" +
"			<span class='layui-font-16'>&nbsp; </span>\r\n" +
"			<font class='layui-font-16'>\r\n" +
"			{{# if(d.Type==='社会老人'){  }}\r\n" +
"			☑</font><font class='layui-font-16'><b>社会老人</b></font>\r\n" +
"			{{#  } else { }}\r\n" +
"			□</font><font class='layui-font-16'>社会老人</font>\r\n" +
"			{{#  } }}\r\n" +
"			<span class='layui-font-16'>&nbsp; </span>\r\n" +
"			<font class='layui-font-16'>\r\n" +
"			{{# if(d.Type==='低保老人'){  }}\r\n" +
"			☑</font><font class='layui-font-16'><b>低保老人</b></font>\r\n" +
"			{{#  } else { }}\r\n" +
"			□</font><font class='layui-font-16'>低保老人</font>\r\n" +
"			{{#  } }}\r\n" +
"			<span class='layui-font-16'>&nbsp; </span>\r\n" +
"			<font class='layui-font-16'>\r\n" +
"			{{# if(d.Type==='五保老人'){  }}\r\n" +
"			☑</font><font class='layui-font-16'><b>五保老人</b></font>\r\n" +
"			{{#  } else { }}\r\n" +
"			□</font><font class='layui-font-16'>五保老人</font>\r\n" +
"			{{#  } }}\r\n" +
"			<span class='layui-font-16'>&nbsp; </span>\r\n" +
"			<font class='layui-font-16'>\r\n" +
"			{{# if(d.Type==='其他'){  }}\r\n" +
"			☑</font><font class='layui-font-16'><b>其他</b></font></td>\r\n" +
"			{{#  } else { }}\r\n" +
"			□</font><font class='layui-font-16'>其他</font></td>\r\n" +
"			{{#  } }} \r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td height='175' rowspan='5' class='borderSet layui-font-16'>紧急联系人</td>\r\n" +
"			{{# if(typeof d.ContactData[0]==='undefined'){ }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'></td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'></td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'></td>\r\n" +
"			{{#  } else { }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>{{= d.ContactData[0].name}}</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'>{{= d.ContactData[0].phone}}</td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'>{{= d.ContactData[0].relationship}}</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			{{# if(typeof d.ContactData[1]==='undefined'){ }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'></td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'></td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'></td>\r\n" +
"			{{#  } else { }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>{{= d.ContactData[1].name}}</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'>{{= d.ContactData[1].phone}}</td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'>{{= d.ContactData[1].relationship}}</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			{{# if(typeof d.ContactData[2]==='undefined'){ }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'></td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'></td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'></td>\r\n" +
"			{{#  } else { }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>{{= d.ContactData[2].name}}</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'>{{= d.ContactData[2].phone}}</td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'>{{= d.ContactData[2].relationship}}</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			{{# if(typeof d.ContactData[3]==='undefined'){ }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'></td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'></td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'></td>\r\n" +
"			{{#  } else { }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>{{= d.ContactData[3].name}}</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'>{{= d.ContactData[3].phone}}</td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'>{{= d.ContactData[3].relationship}}</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			{{# if(typeof d.ContactData[4]==='undefined'){ }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'></td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'></td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'></td>\r\n" +
"			{{#  } else { }}\r\n" +
"				<td class='borderSet layui-font-16'>姓名</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>{{= d.ContactData[4].name}}</td>\r\n" +
"				<td colspan='2' class='borderSet layui-font-16'>电话</td>\r\n" +
"				<td colspan='3' class='borderSet layui-font-16'>{{= d.ContactData[4].phone}}</td>\r\n" +
"				<td class='borderSet layui-font-16'>关系</td>\r\n" +
"				<td class='borderSet layui-font-16'>{{= d.ContactData[4].relationship}}</td>\r\n" +
"			{{#  } }}\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td height='385' rowspan='11' class='borderSet layui-font-16'>健康情况</td>\r\n" +
"			<td rowspan='4' class='borderSet layui-font-16'>慢病</td>\r\n" +
"			<td colspan='9' rowspan='4' class='borderSetLeftAlign layui-font-16'>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('高血压') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('高血压') != -1){ }}<b>高血压</b>{{#  } else { }}高血压{{#  } }}\r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('高血糖') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('高血糖') != -1){ }}<b>高血糖</b>{{#  } else { }}高血糖{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('冠心病') != -1){ }}☑{{#  } else { }}□{{#  } }}\r\n" + 
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('冠心病') != -1){ }}<b>冠心病</b>{{#  } else { }}冠心病{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性支气管炎') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性支气管炎') != -1){ }}<b>慢性支气管炎</b>{{#  } else { }}慢性支气管炎{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('哮喘') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('哮喘') != -1){ }}<b>哮喘</b>{{#  } else { }}哮喘{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性肝炎') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性肝炎') != -1){ }}<b>慢性肝炎</b>{{#  } else { }}慢性肝炎{{#  } }} \r\n" +
"				</font>\r\n" +
"				</br>\r\n" +
"				</br>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性贫血') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性贫血') != -1){ }}<b>慢性贫血</b>{{#  } else { }}慢性贫血{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性关节炎') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性关节炎') != -1){ }}<b>慢性关节炎</b>{{#  } else { }}慢性关节炎{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性颈椎疼痛') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('慢性颈椎疼痛') != -1){ }}<b>慢性颈椎疼痛</b>{{#  } else { }}慢性颈椎疼痛{{#  } }} \r\n" +
"				</font>\r\n" +
"				<span class='layui-font-16'>&nbsp; </span>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('痛风') != -1){ }}☑{{#  } else { }}□{{#  } }} \r\n" +
"				</font>\r\n" +
"				<font class='layui-font-16'>\r\n" +
"					{{# if(d.SlowIll.indexOf('痛风') != -1){ }}<b>痛风</b>{{#  } else { }}痛风{{#  } }}\r\n" + 
"				</font>	\r\n" +
"			</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td rowspan='7' class='borderSet layui-font-16'>其他</td>\r\n" +
"			<td colspan='9' rowspan='7' class='borderSetLeftTopAlign layui-font-16'>\r\n" +
"				</br><span class='layui-font-16'>&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n" +
"				{{= d.Healthy}}\r\n" +
"			</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"		<td height='210' rowspan='6' class='borderSet layui-font-16'>备注</td>\r\n" +
"		<td colspan='10' rowspan='6' class='borderSetLeftTopAlign layui-font-16'>\r\n" +
"			</br><span class='layui-font-16'>&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n" +
"			{{= d.Remarks }}\r\n" +
"		</td>\r\n" +
"		</tr>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'/>\r\n" +
"		<tr height='35' class='borderSet layui-font-16'>\r\n" +
"			<td height='35'  class='borderSet layui-font-16'>登记人</td>\r\n" +
"			<td colspan='5'  class='borderSet layui-font-16'>{{= d.Handler }}</td>\r\n" +
"			<td colspan='3'  class='borderSet layui-font-16'>登记日期</td>\r\n" +
"			<td colspan='2'  class='borderSet layui-font-16'>{{= d.RegisterTime }}</td>\r\n" +
"		</tr>\r\n" +
"	</table>"


;var dispatchtmpl = "\r\n\r\n" +
"	<table width='793.83' border='0' cellpadding='0' cellspacing='0' style='page-break-after:always'>\r\n" +
"		<col width='132.92'/>\r\n" +
"		<col width='136.92'/>\r\n" +
"		<col width='132.92'/>\r\n" +
"		<col width='106.58'/>\r\n" +
"		<col width='151.58'/>\r\n" +
"	<tr height='24'>\r\n" +
"		<td class='indexSet' height='24' width='793.83' colspan='6'>No:{{= d.Idx}}</td>\r\n" +
"	</tr>\r\n" +
"	<tr height='24'>\r\n" +
"		<td class='titleSet' height='96' colspan='6' rowspan='4' >五龙背镇养老福利中心 - 服务派工单</td>\r\n" +
"	</tr>\r\n" +
"	<tr height='24'/>\r\n" +
"	<tr height='24'/>\r\n" +
"	<tr height='24'/>\r\n" +
"	</table>"