<?php define('DRUPAL_ROOT', getcwd());
header('Access-Control-Allow-Origin: *');
include_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);?>
<div class="row row-5">
<?php
$arrcapc = implode(",",$_POST['value']);


/*$query = db_query("SELECT n.nid,fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid JOIN field_data_field_wattage_watt_ as fdfww on fdfww.entity_id=n.nid where n.type='product'  AND fdfpt.field_product_type_nid='".$_POST['value1']."' AND fdfcl.field_capacity_litres__value='".$_POST['value']."' group by fdfww.	field_wattage_watt__value,fdfpp.field_parent_product_nid  ");*/
// if($_POST['value1']==2){
//  $query = db_query("SELECT n.nid,fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid JOIN field_data_field_wattage_watt_ as fdfww on fdfww.entity_id=n.nid where n.type='product'  AND fdfcl.field_capacity_litres__value IN (".$arrcapc.") AND fdfpt.field_product_type_nid='".$_POST['value1']."'  group by fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid  ");
// } 
// if($_POST['value1']==3){
	
//  $query = db_query("SELECT n.nid,fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid JOIN field_data_field_wattage_watt_ as fdfww on fdfww.entity_id=n.nid where n.type='product'  AND fdfcl.field_capacity_litres__value IN (".$arrcapc.") AND fdfpt.field_product_type_nid='".$_POST['value1']."'  group by fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid  ");
// } 
if(isset($_POST['value1']))
$query = db_query("SELECT n.nid,fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid JOIN field_data_field_wattage_watt_ as fdfww on fdfww.entity_id=n.nid where n.type='product'  AND fdfcl.field_capacity_litres__value IN (".$arrcapc.") AND fdfpt.field_product_type_nid='".$_POST['value1']."'  group by fdfcl.field_capacity_litres__value,fdfpp.field_parent_product_nid  ");
			
					//$records = $query->fetchAll();
					$singlerecords = $query->fetchAll();
					foreach($singlerecords as $sdata){
					$similar = node_load($sdata->nid);
					$stitle = explode("(",$similar->title);
					
					//echo "<pre>";
					//print_r($sdata);
					//foreach($records as $imge){ 
					$simgurl = file_create_url($similar->field_images['und'][0]['uri']);
					$surl = drupal_get_path_alias('node/' . $similar->vid);
					
					
					
					$query1 = db_query("SELECT n.nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.	entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid where n.type='product'  AND fdfpt.field_product_type_nid='".$_POST['value1']."' AND fdfcl.field_capacity_litres__value='".$sdata->field_capacity_litres__value."' AND fdfpp.field_parent_product_nid='".$sdata->field_parent_product_nid."' ");
					
					/*$query1 = "SELECT n.nid from node as n JOIN field_data_field_parent_product as fdfpp ON fdfpp.	entity_id=n.nid JOIN field_data_field_product_type as fdfpt ON fdfpt.entity_id=fdfpp.entity_id JOIN field_data_field_capacity_litres_ as fdfcl ON fdfcl.entity_id=n.nid where n.type='product' AND fdfcl.field_capacity_litres__value='".$sdata->field_capacity_litres__value."'";*/
					
					$query1 = db_query($query1);
					 
					 $records = $query1->fetchAll();
					// echo "<pre>";
					//print_r($records);
					?>
                                <div class="col-6 col-lg-3 px-xl-3 px-sm-2 px-1 p-grid my-sm-3 my-1">
                            <div class="card">
                                <div class="row align-items-end  mx-auto   h-100">
                                    <div class="p-3 p-sm-4 w-100">
                                        <a href="<?php print base_path().$surl;?>" title="View Product" class="item text-center">
										<?php foreach($records as $datas){ 
												$multiple = node_load($datas->nid);
												$mimgurl = file_create_url($multiple->field_images['und'][0]['uri']);
												//echo "<pre>";
												//print_r($datas)
												?>
                                            <img class="p-img" src="<?php print $mimgurl; ?>" alt="<?php print $data->title; ?>">
                                            
                                       
                                           
										<?php } ?>
                                            
                                        </a>

                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-between align-items-center mx-auto">
                                            <div class="col-7">
                                                <div class="varianttype">
												<?php foreach($records as $data){ 
												$multiple = node_load($data->nid);
												
												?>
                                                    <div class="item"><span  class="p-color"
                                                            style="background-color:<?php print $multiple->field_color_code['und'][0]['value'] ?>"></span></div>
                                                   
												<?php } ?>
                                                </div>
                                            </div>
                                            <div class="col-5 mb-2 text-right">
                                                <input type="checkbox" class="ui-checkbox" value="<?php print $data->nid; ?>"
                                                    name="comparecheckbox" id="<?php print $data->nid; ?>"><label
                                                    for="<?php print $data->nid; ?>" class="m-0 comparebtn">Compare</label>
                                            </div>
                                        </div>
                                        <div
                                            class="row justify-content-between align-items-center mx-auto mb-2">
                                            <div class="col-7">
                                                <h4 class="p-title"><a href="<?php print base_path().$surl;?>" title="View Product"><?php print $stitle[0];  ?></a>
                                                </h4>
                                            </div>
                                            <div class="col-5 text-right"><span
                                                    class="p-price">₹<?php print number_format($similar->field_price['und'][0]['value'],2); ?></span>
                                            </div>
                                        </div>
                                        <p class="p-text mb-2"><?php print substr($similar->body['und'][0]['value'],0,75);?>...</p>
                                        <div class="row mx-auto mb-3">
                                            <div class="col-auto pr-3">
                                                <span class="p-spec"><?php print $similar->field_capacity_litres_['und'][0]['value'];?> L</span>
                                            </div>
                                            <div class="col-auto pr-3">
                                                <span class="p-spec"><?php print $similar->field_wattage_watt_['und'][0]['value'];?> </span>
                                            </div>
                                        </div>
                                        <div>
                                            <a class="readmore" href="<?php print base_path().$surl;?>">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
					<?php } ?>
					</div>
					 <script src="<?php print base_path().path_to_theme() ?>/js/main.js"></script>