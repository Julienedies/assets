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


///////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////

//var jsSrc  = document.getElementById("ada_lang").src;
//var qry = jsSrc.substr(jsSrc.indexOf("?")+1);
////console.log(qry);
//var tmp = qry.split('&');
//var jsQry = {};
//for(var i=0;i<tmp.length;i++){
//    var vtmp = tmp[i].split('=');
//    jsQry[vtmp[0]] = vtmp[1];
//    //console.log(vtmp[0]);
//    //console.log(vtmp[1]);
//}

//multiple language config
var fin_lang_config = {};
fin_lang_config.en = {};
fin_lang_config.szh = {};
fin_lang_config.en.search_keyword_none      = 'You can search for companies through keywords and criteria';
fin_lang_config.szh.search_keyword_none     = '请输入关键词或选择你要搜索的条件';
fin_lang_config.en.prev_text                = 'Prev';
fin_lang_config.szh.prev_text               = '上一页';
fin_lang_config.en.next_text                = 'Next';
fin_lang_config.szh.next_text               = '下一页';
fin_lang_config.en.company_name             = 'Company Name';
fin_lang_config.szh.company_name            = '公司名称';
fin_lang_config.en.title_ticker             = 'Security Code';
fin_lang_config.szh.title_ticker            = '证券代码';
fin_lang_config.en.title_section            = 'Section';
fin_lang_config.szh.title_section           = '类型';
fin_lang_config.en.title_industry           = 'Classification';
fin_lang_config.szh.title_industry          = '行业';
fin_lang_config.en.no_search_result         = 'No company matches your search cretiria';
fin_lang_config.szh.no_search_result        = '没有符合条件的公司';
fin_lang_config.en.title_region             = 'HQ Region';
fin_lang_config.szh.title_region            = '地区';
fin_lang_config.en.title_market             = 'Listed/Private';
fin_lang_config.szh.title_market            = '上市/非上市';

fin_lang_config.en.business_sales_rev = 'Total Revenue';
fin_lang_config.szh.business_sales_rev = '营业总收入';
fin_lang_config.en.business_sales_gro = 'Gross Profit';
fin_lang_config.szh.business_sales_gro = '毛利润';
fin_lang_config.en.operating_nodata = 'No search results. Please try another Calculation method (Cumulative / Non-Cumulative).';
fin_lang_config.szh.operating_nodata = '暂无数据，请尝试重新设置累计/非累计的计算方式。';
fin_lang_config.en.operating_zoomIn = 'Maximize';
fin_lang_config.szh.operating_zoomIn = '最大化表格';
fin_lang_config.en.operating_zoomOut = 'Minimize';
fin_lang_config.szh.operating_zoomOut = '还原表格';
fin_lang_config.en.opt_Industry           = 'Industry';
fin_lang_config.szh.opt_Industry          = '行业';

fin_lang_config.en.dayname_yi="Monday";
fin_lang_config.en.dayname_er="Tuesday";
fin_lang_config.en.dayname_san="Wednesday";
fin_lang_config.en.dayname_si="Thursday";
fin_lang_config.en.dayname_wu="Friday";
fin_lang_config.en.dayname_liu="Saturday";
fin_lang_config.en.dayname_ri="Sunday";
fin_lang_config.szh.dayname_yi="星期一";
fin_lang_config.szh.dayname_er="星期二";
fin_lang_config.szh.dayname_san="星期三";
fin_lang_config.szh.dayname_si="星期四";
fin_lang_config.szh.dayname_wu="星期五";
fin_lang_config.szh.dayname_liu="星期六";
fin_lang_config.szh.dayname_ri="星期日";
fin_lang_config.en.daysname_yi="Mon";
fin_lang_config.en.daysname_er="Tue";
fin_lang_config.en.daysname_san="Wed";
fin_lang_config.en.daysname_si="Thu";
fin_lang_config.en.daysname_wu="Fri";
fin_lang_config.en.daysname_liu="Sat";
fin_lang_config.en.daysname_ri="Sun";
fin_lang_config.szh.monthname_1="1月";
fin_lang_config.szh.monthname_2="2月";
fin_lang_config.szh.monthname_3="3月";
fin_lang_config.szh.monthname_4="4月";
fin_lang_config.szh.monthname_5="5月";
fin_lang_config.szh.monthname_6="6月";
fin_lang_config.szh.monthname_7="7月";
fin_lang_config.szh.monthname_8="8月";
fin_lang_config.szh.monthname_9="9月";
fin_lang_config.szh.monthname_10="10月";
fin_lang_config.szh.monthname_11="11月";
fin_lang_config.szh.monthname_12="12月";
fin_lang_config.en.monthname_1="Jan";
fin_lang_config.en.monthname_2="Feb";
fin_lang_config.en.monthname_3="Mar";
fin_lang_config.en.monthname_4="Apr";
fin_lang_config.en.monthname_5="May";
fin_lang_config.en.monthname_6="Jun";
fin_lang_config.en.monthname_7="Jul";
fin_lang_config.en.monthname_8="Agu";
fin_lang_config.en.monthname_9="Sep";
fin_lang_config.en.monthname_10="Oct";
fin_lang_config.en.monthname_11="Nov";
fin_lang_config.en.monthname_12="Dec";
fin_lang_config.en.rangeSelectorFrom=" ";
fin_lang_config.szh.rangeSelectorFrom=" ";
fin_lang_config.en.rangeSelectorTo="-";
fin_lang_config.szh.rangeSelectorTo="至";
fin_lang_config.en.rangeSelectorZoom="Zoom:";
fin_lang_config.szh.rangeSelectorZoom="区间:";
fin_lang_config.en.chartClose="Close";
fin_lang_config.szh.chartClose="收盘价";
fin_lang_config.en.chartVolume="Volume";
fin_lang_config.szh.chartVolume="交易量";
fin_lang_config.en.value="Value";
fin_lang_config.szh.value="数值";
fin_lang_config.en.share="Share";
fin_lang_config.szh.share="股数";
fin_lang_config.en.cornerstone_detail_cur="US $m";
fin_lang_config.szh.cornerstone_detail_cur="投资金额 (百万美元)";
fin_lang_config.en.cornerstone_usd_millions = "USD Millions";
fin_lang_config.szh.cornerstone_usd_millions = "百万美元";
fin_lang_config.en.cornerstone_usd = "USD";
fin_lang_config.szh.cornerstone_usd = "美元";
fin_lang_config.en.lockup = "lockup to expire";
fin_lang_config.szh.lockup = "将解禁";

fin_lang_config.szh.msg_error_inlegal_v = "单项投资金额、历史投资总规模、平均投资规模、历史投资数量请输入数字";
fin_lang_config.en.msg_error_inlegal_v = "Please input valid value for item \'Investment Size\', \'Total Investment Size\', \'Average Investment Size \' and \'Investment Times\'.";
fin_lang_config.szh.msg_error_too_long = "请输入小于16位的有效数字";
fin_lang_config.en.msg_error_too_long = "Please input a maximum of 16 numbers";
fin_lang_config.szh.msg_search_error = "输入的数字逻辑不合法，最小值不能大于最大值";
fin_lang_config.en.msg_search_error = "The mininum value is greater than the maximum one. Please adjust the value and try again.";
fin_lang_config.szh.msg_search_posnum = "历史投资数量请输入正整数";
fin_lang_config.en.msg_search_posnum = "Please enter a positive integer.";


//翻成中文
fin_lang_config.szh.cornerstone_inv = "基石投资者";
fin_lang_config.szh.cornerstone_holder = "投资实体";
fin_lang_config.szh.cornerstone_inv_date = "投资日期";
fin_lang_config.szh.cornerstone_inv_price = "投资价格";
fin_lang_config.szh.cornerstone_inv_scale = "投资规模";
fin_lang_config.szh.cornerstone_pri_money = "原始货币";
fin_lang_config.szh.cornerstone_shares = "股";
fin_lang_config.szh.cornerstone_inv_ratio = "投资占比";
fin_lang_config.szh.cornerstone_lockper = "锁定期限";
fin_lang_config.szh.cornerstone_release_date = "解禁日期";
fin_lang_config.szh.cornerstone_cur_price = "当前股份价值";
fin_lang_config.szh.cornerstone_month= "月";

fin_lang_config.szh.cornerstone_public_company= "上市公司";
fin_lang_config.szh.cornerstone_release_time= "发布时间";
fin_lang_config.szh.cornerstone_inv_money= "投资金额";
fin_lang_config.szh.cornerstone_inv_share= "投资股份";
fin_lang_config.szh.cornerstone_offer_price= "发行价格";
fin_lang_config.szh.cornerstone_expir_date= "解禁日期";
fin_lang_config.szh.cornerstone_release_cycle= "解禁周转天数";


fin_lang_config.szh.cornerstone_inv_type= "基石类型";
fin_lang_config.en.cornerstone_inv_type= "Investor Type";
fin_lang_config.szh.cornerstone_investor_type= "交易类型";
fin_lang_config.en.cornerstone_investor_type= "Transaction Type";
fin_lang_config.szh.cornerstone_trans_money= "交易规模";
fin_lang_config.en.cornerstone_trans_money= "Deal Size";

fin_lang_config.szh.cornerstone_remind= "提醒";
fin_lang_config.szh.cornerstone_prj= "上市公司";
fin_lang_config.szh.cornerstone_inv_times= "<a href='javascript:void(0)' title='历史投资数量是指某一个基石投资者在所有投资记录中所投资上市公司的次数。' class='gtip'></a>&nbsp;历史投资公司数量";
fin_lang_config.szh.cornerstone_inv_sum= "<a href='javascript:void(0)' title='历史投资总规模是指某一个基石投资者在所有投资记录中所投资金额的合计值。' class='gtip'></a>&nbsp;历史投资金额总规模";
fin_lang_config.szh.cornerstone_inv_avg= "平均投资规模";
fin_lang_config.szh.cornerstone_inv_now_price ="当前股价";

fin_lang_config.szh.cornerstone_cur_share = "当前股价";
fin_lang_config.szh.cornerstone_secunum = "<a href='javascript:void(0)' title='公司数量合计是指某一个基石投资者在当前搜索结果中所投资上市公司的数量。' class='gtip_g'></a>&nbsp;投资公司合计";
fin_lang_config.en.cornerstone_secunum = "<a href='javascript:void(0)' title='Company Subtotal refers to the number of investments in listed companies of a specified cornerstone investor based on the current search criteria.' class='gtip_g'></a>&nbsp;No. Invest. Subtotal";
fin_lang_config.szh.cornerstone_amtunum = "<a href='javascript:void(0)' title='投资金额合计是指某一个基石投资者在当前搜索结果中所投资金额的合计值。' class='gtip_g'></a>&nbsp;投资金额合计";
fin_lang_config.en.cornerstone_amtunum = "<a href='javascript:void(0)' title='Invest. Size Subtotal refers to the investment amount of a specified cornerstone investor based on the current search criteria.' class='gtip_g'></a>&nbsp;Invest. Amt. Subtotal";


//翻成英文----------------------------------------
fin_lang_config.en.cornerstone_inv = "Cornerstone Investor";
fin_lang_config.en.cornerstone_holder = "Invest. Entity";
fin_lang_config.en.cornerstone_inv_date = "Invest. Date";
fin_lang_config.en.cornerstone_inv_price = "Invest. Price";
fin_lang_config.en.cornerstone_inv_scale = "Invest. Size";
fin_lang_config.en.cornerstone_pri_money = "Original Currency";
fin_lang_config.en.cornerstone_shares = "Shares";
fin_lang_config.en.cornerstone_inv_ratio = "Shareholding";
fin_lang_config.en.cornerstone_lockper = "Lockup";
fin_lang_config.en.cornerstone_release_date = "Lockup Expiry";
fin_lang_config.en.cornerstone_cur_price = "Current Share Value";
fin_lang_config.en.cornerstone_month= "Months";

fin_lang_config.en.cornerstone_public_company= "Invested Company";
fin_lang_config.en.cornerstone_release_time= "Invest. Date";
fin_lang_config.en.cornerstone_inv_money= "Invest. Size";
fin_lang_config.en.cornerstone_inv_share= "Shares";
fin_lang_config.en.cornerstone_offer_price= "Invest. Price";
fin_lang_config.en.cornerstone_expir_date= "Lockup Expire";
fin_lang_config.en.cornerstone_release_cycle= "Release Turnover";

fin_lang_config.en.cornerstone_remind= "Alert";
fin_lang_config.en.cornerstone_prj= "Listed Company";
fin_lang_config.en.cornerstone_inv_times= "<a href='javascript:void(0)' title='No. Investment refers to the times of investments in listed companies of a specified cornerstone investor based on all the historical transactions.' class='gtip'></a>&nbsp;Historical No. Invest. Total";
fin_lang_config.en.cornerstone_inv_sum= "<a href='javascript:void(0)' title='Total Invest. Size refers to the investment amount of a specified cornerstone investor based on all the historical transactions.' class='gtip'></a>&nbsp;Historical Invest. Amt. Total";
fin_lang_config.en.cornerstone_inv_avg= "Avg Invest. Size";
fin_lang_config.en.cornerstone_inv_now_price ="Latest Price";

fin_lang_config.en.cornerstone_cur_share = "Closing Price";

//----------------------------------------------------------

fin_lang_config.en.months_1="January";
fin_lang_config.en.months_2="February";
fin_lang_config.en.months_3="March";
fin_lang_config.en.months_4="April";
fin_lang_config.en.months_5="May";
fin_lang_config.en.months_6="June";
fin_lang_config.en.months_7="July";
fin_lang_config.en.months_8="August";
fin_lang_config.en.months_9="September";
fin_lang_config.en.months_10="October";
fin_lang_config.en.months_11="November";
fin_lang_config.en.months_12="December";
fin_lang_config.szh.months_1="1月";
fin_lang_config.szh.months_2="2月";
fin_lang_config.szh.months_3="3月";
fin_lang_config.szh.months_4="4月";
fin_lang_config.szh.months_5="5月";
fin_lang_config.szh.months_6="6月";
fin_lang_config.szh.months_7="7月";
fin_lang_config.szh.months_8="8月";
fin_lang_config.szh.months_9="9月";
fin_lang_config.szh.months_10="10月";
fin_lang_config.szh.months_11="11月";
fin_lang_config.szh.months_12="12月";


//multiple project language config
var fin_search_lang_config = {};
fin_search_lang_config.en = {};
fin_search_lang_config.szh = {};
fin_search_lang_config.en.select_csfindustry = 'CSF';
fin_search_lang_config.szh.select_csfindustry = '数库行业分类';
fin_search_lang_config.en.select_icbindustry = 'ICB';
fin_search_lang_config.szh.select_icbindustry = '富时行业分类';
fin_search_lang_config.en.select_sywgindustry = 'SYWG – Only SH&SZ Comp';
fin_search_lang_config.szh.select_sywgindustry = '申银万国行业分类（仅沪深股）';
fin_search_lang_config.en.select_csrcindustry = 'CSRC – Only SH&SZ Comp';
fin_search_lang_config.szh.select_csrcindustry = '证监会行业分类（仅沪深股）';
fin_search_lang_config.en.select_hsindustry = 'HS – Only HK Comp';
fin_search_lang_config.szh.select_hsindustry = '恒生行业分类（仅港股）';
fin_search_lang_config.en.select_region = 'HQ Region';
fin_search_lang_config.szh.select_region = '地区';
fin_search_lang_config.en.select_market = 'Listed/Private';
fin_search_lang_config.szh.select_market = '上市/非上市';


//ced indicator
fin_lang_config.en.title_Comp_name="Company Name";
fin_lang_config.szh.title_Comp_name="公司名称";
fin_lang_config.en.title_related_product="Related Products";
fin_lang_config.szh.title_related_product="相关产品";
fin_lang_config.en.title_revenue="Operating Revenue(millon USD)";
fin_lang_config.szh.title_revenue="营业收入(万元)";
fin_lang_config.en.title_Rev_rate="Operation Revenue Ratio";
fin_lang_config.szh.title_Rev_rate="收入占比";
fin_lang_config.en.title_profit="Operation Profit(millon USD)";
fin_lang_config.szh.title_profit="营业利润(万元)";
fin_lang_config.en.title_Pro_rate="Operating Profit Ratio";
fin_lang_config.szh.title_Pro_rate="营业利润率";
fin_lang_config.en.title_stock_price="Stock Price";
fin_lang_config.szh.title_stock_price="股价";
fin_lang_config.en.title_variation_trend="Trend";
fin_lang_config.szh.title_variation_trend="变动趋势";

fin_lang_config.en.cust_add="Add to my favorites stock";
fin_lang_config.en.cust_added="Added";
fin_lang_config.en.cust_add_overlap="Already exists";
fin_lang_config.en.cust_add_ok="Add successfully！";
fin_lang_config.en.cust_add_err="Add failed, please try again later";
fin_lang_config.en.my_fav_stock = "My Favorite Stock";
fin_lang_config.szh.cust_add="加入自选股";
fin_lang_config.szh.cust_added="已加入自选股";
fin_lang_config.szh.cust_add_overlap="已存在";
fin_lang_config.szh.cust_add_ok="添加成功！";
fin_lang_config.szh.cust_add_err="添加失败，请重试";
fin_lang_config.szh.my_fav_stock = "我的自选股";


//get the language setting and set the language var
var ada_lang = jsQry['lang'];
var assets_v = jsQry['v'];
var fin_lang = fin_lang_config[ada_lang];
var fin_search_lang = fin_search_lang_config[ada_lang];