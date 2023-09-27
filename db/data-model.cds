namespace com.bookshop;
using {managed} from '@sap/cds/common';

entity Books: managed {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  price  : Integer;
  tags : String(10);
}
 