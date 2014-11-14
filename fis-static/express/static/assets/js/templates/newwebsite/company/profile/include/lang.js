var jsSrc  = document.getElementById("ada_lang").src;
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