function triangle(rows){
  if(rows == 0)return 0;
  else if(rows == 1)return 1;
  else return rows + triangle(rows - 1);
}