import  './ExpenceItem.css'
function ExpenceItem(){
return(
	<div className='expense-item'>
		<h2>March 12th 2021</h2>
		<div className='expense-item-description'>
			<h2 >Car Insurance</h2>
			<div className='expense-item-price'>	$200</div>
		</div>
	</div>
);
}
export default ExpenceItem;