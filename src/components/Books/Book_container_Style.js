import style from 'styled-components';

export const BookContainerStyle = style.div`
.Addtocart-btn{
  position:absolute !important;
  bottom:0;
  right:0;
  background: #1f357d;
  border: none;
  padding: 4px;
  border-radius:10px 0 0 0;
  transition:all 0.5s linear;
  transform:translate(100%,100%);
}
.more{
  background: none;
  border: none;
  outline: none;
  color: #1f357d;
}
.info{
  overflow:hidden;
  position:relative;
  width: 140px;
  transition:all 1s linear;
}
&:hover{
  border:0.04rem solid rgba(29, 50, 119,0.2);
  box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
&:hover .Addtocart-btn{
  transform:translate(0,0);
}
.info h5{
  margin-top:3px;
  text-align:center;
}
.book{
  display:flex;
  flex-direction:column;
}
.book .book-img{
  display:flex;
  // margin-left: 0.3rem;
}
.Addtocart-btn p{
  color:white;
  padding-top:10px;
}

`;

