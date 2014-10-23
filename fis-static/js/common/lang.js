var jsSrc  = '?v=0.1.1&lang=szh' || document.getElementById("ada_lang").src;
var qry = jsSrc.substr(jsSrc.indexOf("?")+1);
//console.log(qry);
var tmp = qry.split('&');
var jsQry = {};
for(var i=0;i<tmp.length;i++){
    var vtmp = tmp[i].split('=');
    jsQry[vtmp[0]] = vtmp[1];
    //console.log(vtmp[0]);
    //console.log(vtmp[1]);
}

//multiple language config
var www_lang_config = {};
www_lang_config.en = {};
www_lang_config.szh = {};
www_lang_config.en.first_name_empty         = 'First name can not be empty';
www_lang_config.szh.first_name_empty        = '名字不能为空，请填写';
www_lang_config.en.last_name_empty          = 'Last name can not be empty';
www_lang_config.szh.last_name_empty         = '姓氏不能为空，请填写';
www_lang_config.en.company_empty            = 'Company name can not be empty';
www_lang_config.szh.company_empty           = '公司名不能为空，请填写';
www_lang_config.en.company_empty            = 'Company name can not be empty';
www_lang_config.szh.company_empty           = '公司名不能为空，请填写';
www_lang_config.en.company_type_empty       = 'Please select your company type';
www_lang_config.szh.company_type_empty      = '必须选择您的公司类型';
www_lang_config.en.work_email_empty         = 'Company e-mail can not be empty';
www_lang_config.szh.work_email_empty        = '公司电子邮件不能为空';
www_lang_config.en.work_email_wrong_format  = 'Inlegal e-mail format';
www_lang_config.szh.work_email_wrong_format = '电子邮件格式不正确';
www_lang_config.en.country_empty            = 'Please select your country';
www_lang_config.szh.country_empty           = '请选择国家';
www_lang_config.en.phone_empty              = 'Please type your telephone number';
www_lang_config.szh.phone_empty             = '请填写您的联系电话';
www_lang_config.en.city_empty               = 'Please type your city';
www_lang_config.szh.city_empty              = '请填写您所在的城市';
www_lang_config.en.come_from_empty          = 'Please select how to hear about us';
www_lang_config.szh.come_from_empty         = '请选择如何得知我们的产品及服务';
www_lang_config.en.come_from_empty          = 'Please select how to hear about us';
www_lang_config.szh.come_from_empty         = '请选择如何得知我们的产品及服务';
www_lang_config.en.auth_code_empty          = 'Please type the verification code you see';
www_lang_config.szh.auth_code_empty         = '请填写你看到的验证码';
www_lang_config.en.sam_update         		= 'Update';
www_lang_config.szh.sam_update         		= '更新';
www_lang_config.en.search_null         		= 'Please search or input a standard SAM™ product.';
www_lang_config.szh.search_null        		= '请搜索或输入标准SAM™产品';


www_lang_config.szh.search_keyword_none     = '请输入关键词或选择你要搜索的条件';
www_lang_config.en.prev_text                = 'Prev';
www_lang_config.szh.prev_text               = '上一页';
www_lang_config.en.next_text                = 'Next';
www_lang_config.szh.next_text               = '下一页';

www_lang_config.en.opt_Region               = 'Select Region';
www_lang_config.szh.opt_Region              = '选择地区';
www_lang_config.en.opt_Industry             = 'Select Industry';
www_lang_config.szh.opt_Industry            = '选择行业';

www_lang_config.szh.otc_date                 = '日期';
www_lang_config.szh.otc_index                = '指数';
www_lang_config.en.otc_date                 = 'Date';
www_lang_config.en.otc_index                = 'Index';
www_lang_config.szh.otc_value               = "累计成交额";
www_lang_config.en.otc_value                = "Value";
www_lang_config.en.otc_market                = 'Mkt Cap';
www_lang_config.szh.otc_market                = '市值';
www_lang_config.szh.otc_company_count		= "公司数";
www_lang_config.en.otc_company_count		= "Comp";

www_lang_config.szh.otc_companys                 = '家公司';
www_lang_config.en.otc_companys                 = ' Companies';

//for sign up page
www_lang_config.szh.register_succ = '注册成功';
www_lang_config.en.register_succ = 'Register Successfully';
www_lang_config.szh.empty_email = '邮箱地址不能为空';
www_lang_config.en.empty_email = 'Email address can not be empty';
www_lang_config.szh.empty_password = '密码不能为空';
www_lang_config.en.empty_password = 'Password can not be empty';
www_lang_config.szh.different_password = '密码不一致';
www_lang_config.en.different_password = 'The two passwords you typed do not match';
www_lang_config.szh.empty_authcode = '验证码不能为空';
www_lang_config.en.empty_authcode = 'Auth code can not be empty';
www_lang_config.szh.wrong_email = '请输入正确的邮箱地址';
www_lang_config.en.wrong_email = 'Please enter the well-formed email address';
www_lang_config.szh.wrong_password = '密码为空或两次密码不匹配';
www_lang_config.en.wrong_password = 'Entered passwords does not match or empty';
www_lang_config.szh.wrong_password_lens = '密码至少为8个字符';
www_lang_config.en.wrong_password_lens = 'Password must be alphanumeric with minmum 8 characters';
www_lang_config.szh.wrong_authcode = '验证码错误';
www_lang_config.en.wrong_authcode = 'Entered auth code does not match';
www_lang_config.szh.user_existed = '用户已经存在';
www_lang_config.en.user_existed = 'The user is already exists';
www_lang_config.szh.send_activation_mail = '再次发送激活邮件';
www_lang_config.en.send_activation_mail = 'Send activation mail again';
www_lang_config.szh.waiting_send = '等待';
www_lang_config.en.waiting_send = 'Waiting';
www_lang_config.szh.send_succ = '发送成功';
www_lang_config.en.send_succ = 'Send Successfully';
www_lang_config.szh.send_fail = '发送失败';
www_lang_config.en.send_fail = 'Send Unsuccessfully';


www_lang_config.en.dayname_yi="Monday";
www_lang_config.en.dayname_er="Tuesday";
www_lang_config.en.dayname_san="Wednesday";
www_lang_config.en.dayname_si="Thursday";
www_lang_config.en.dayname_wu="Friday";
www_lang_config.en.dayname_liu="Saturday";
www_lang_config.en.dayname_ri="Sunday";
www_lang_config.szh.dayname_yi="星期一";
www_lang_config.szh.dayname_er="星期二";
www_lang_config.szh.dayname_san="星期三";
www_lang_config.szh.dayname_si="星期四";
www_lang_config.szh.dayname_wu="星期五";
www_lang_config.szh.dayname_liu="星期六";
www_lang_config.szh.dayname_ri="星期日";
www_lang_config.en.daysname_yi="Mon";
www_lang_config.en.daysname_er="Tue";
www_lang_config.en.daysname_san="Wed";
www_lang_config.en.daysname_si="Thu";
www_lang_config.en.daysname_wu="Fri";
www_lang_config.en.daysname_liu="Sat";
www_lang_config.en.daysname_ri="Sun";
www_lang_config.szh.monthname_1="1月";
www_lang_config.szh.monthname_2="2月";
www_lang_config.szh.monthname_3="3月";
www_lang_config.szh.monthname_4="4月";
www_lang_config.szh.monthname_5="5月";
www_lang_config.szh.monthname_6="6月";
www_lang_config.szh.monthname_7="7月";
www_lang_config.szh.monthname_8="8月";
www_lang_config.szh.monthname_9="9月";
www_lang_config.szh.monthname_10="10月";
www_lang_config.szh.monthname_11="11月";
www_lang_config.szh.monthname_12="12月";
www_lang_config.en.monthname_1="Jan";
www_lang_config.en.monthname_2="Feb";
www_lang_config.en.monthname_3="Mar";
www_lang_config.en.monthname_4="Apr";
www_lang_config.en.monthname_5="May";
www_lang_config.en.monthname_6="Jun";
www_lang_config.en.monthname_7="Jul";
www_lang_config.en.monthname_8="Agu";
www_lang_config.en.monthname_9="Sep";
www_lang_config.en.monthname_10="Oct";
www_lang_config.en.monthname_11="Nov";
www_lang_config.en.monthname_12="Dec";
www_lang_config.en.rangeSelectorFrom=" ";
www_lang_config.szh.rangeSelectorFrom=" ";
www_lang_config.en.rangeSelectorTo="-";
www_lang_config.szh.rangeSelectorTo="至";
www_lang_config.en.rangeSelectorZoom="Zoom:";
www_lang_config.szh.rangeSelectorZoom="区间:";
www_lang_config.en.chartVolume="Volume";
www_lang_config.szh.chartVolume="交易量";
www_lang_config.en.value="Value";
www_lang_config.szh.value="数值";
www_lang_config.en.share="Share";
www_lang_config.szh.share="股数";
www_lang_config.en.cornerstone_detail_cur="US $m";
www_lang_config.szh.cornerstone_detail_cur="投资金额 (百万美元)";
www_lang_config.en.cornerstone_usd_millions = "USD Millions";
www_lang_config.szh.cornerstone_usd_millions = "百万美元";
www_lang_config.en.cornerstone_usd = "USD";
www_lang_config.szh.cornerstone_usd = "美元";
www_lang_config.en.lockup = "lockup to expire";
www_lang_config.szh.lockup = "将解禁";

www_lang_config.en.fin_chart_unit = "Unit: Thousand RMB";
www_lang_config.szh.fin_chart_unit = "单位：千人民币";
www_lang_config.en.fin_chart_unit2 = "Unit: %";
www_lang_config.szh.fin_chart_unit2 = "单位：%";

www_lang_config.en.chartAsk = "Latest Ask Price";
www_lang_config.szh.chartAsk = "最新卖方报价";
www_lang_config.en.chartBid = "Latest Bid Price";
www_lang_config.szh.chartBid = "最新买方报价";
www_lang_config.en.chartAmt = "Trade Amt.";
www_lang_config.szh.chartAmt = "成交金额";
www_lang_config.en.chartAskAmt = "Ask Trade Amt.";
www_lang_config.szh.chartAskAmt = "报卖金额";
www_lang_config.en.chartBidAmt = "Bid Trade Amt.";
www_lang_config.szh.chartBidAmt = "报买金额";
www_lang_config.en.chartClose="Close";
www_lang_config.szh.chartClose="收盘价";
www_lang_config.en.chartDeal="Latest Deal Price";
www_lang_config.szh.chartDeal="最新成交价";

www_lang_config.en.income_stat="Income Statament";
www_lang_config.szh.income_stat="利润表";
www_lang_config.en.balance_sheet="Balance Sheet";
www_lang_config.szh.balance_sheet="资产负债表";
www_lang_config.en.cash_flow_stat="Cash Flow Statement";
www_lang_config.szh.cash_flow_stat="现金流量表";
www_lang_config.en.fin_ratio="Financial Ratio";
www_lang_config.szh.fin_ratio="财务比率";

www_lang_config.en.no_analysis_data="No comparable analysis data"
www_lang_config.szh.no_analysis_data="尚无可比分析数据"

www_lang_config.szh.nindex_count="家"
www_lang_config.en.nindex_count="Com"

www_lang_config.szh.seefull="查看所有"
www_lang_config.en.seefull="View All"
www_lang_config.szh.chart_chg="收益率"
www_lang_config.en.chart_chg="Yields"
www_lang_config.szh.stock_index="指数"
www_lang_config.en.stock_index="Index"
www_lang_config.szh.stock_add="加入对比"
www_lang_config.en.stock_add="Add to Contrast"

www_lang_config.szh.login_first="请先登录或注册账号"
www_lang_config.en.login_first="Please Login or Sign Up"
www_lang_config.szh.del_all="清空所有自选股?"
www_lang_config.en.del_all="Clear all favorites Stock?"
www_lang_config.szh.del_err="删除失败，请重试"
www_lang_config.en.del_err="Delete failed, please try again later"
www_lang_config.szh.del_ok="删除成功"
www_lang_config.en.del_ok="Delete successfully"
www_lang_config.szh.no_select="未选中公司，请重新选择"
www_lang_config.en.no_select="Please select first"

//get the language setting and set the language var
var ada_lang = jsQry['lang'];
var assets_v = jsQry['v'];
var www_lang = www_lang_config[ada_lang];
