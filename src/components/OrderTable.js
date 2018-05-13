import React from 'react';
import {Table, Column, HeaderCell, Cell} from 'rsuite-table';
import {Pagination} from 'rsuite'
import {withStyles} from "material-ui/styles/index";
import style from '../../node_modules/rsuite-table/lib/less/index.less';


const dataList = [
  {id:1, name:'a', email:'9422908khjkjhkj57@email.com',avartar:'src/assets/course/course1.png'},
  {id:2, name:'b', email:'b@email.com',avartar:'src/assets/course/course2.png'},
];

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <img src={rowData[dataKey]} width="100" height="100"/>
  </Cell>
);


function formatLengthMenu(lengthMenu) {
  return (
    <div className="table-length">
      <span> 每页 </span>
      {lengthMenu}
      <span> 条 </span>
    </div>
  );
}

function formatInfo(total, activePage) {
  return (
    <span>共 <i>{total}</i> 条数据</span>
  );
}

class OrderTable extends React.Component {

  render(){
    return (
      <div>
      <Table data = {dataList} onRerenderRowHeight={()=>{return 200}}
      >
        <Column>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id"></Cell>
        </Column>

        <Column>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name"></Cell>
        </Column>

        <Column  width = {200} resizable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email"></Cell>
        </Column>

        <Column  width = {100}  resizable>
          <HeaderCell>Avartar</HeaderCell>
          <ImageCell dataKey="avartar"></ImageCell>
        </Column>
      </Table>

      </div>
    );
  }
}
export default withStyles(style)(OrderTable);
