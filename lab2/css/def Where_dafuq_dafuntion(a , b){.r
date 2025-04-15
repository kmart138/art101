def Where_dafuq_dafuntion(a , b){
  if type(a) == float && type(b) == float
    printf('{a} + {b} = {a+b} ' + type(a+b))
  elif type(a) == int && type(b) == int
    (printf('{a} - {b} = {a-b} ' + type(a-b))
  elif type(a) == float && type(b) == int
    printf('{a} * {b} = {a*b} ' + type(a*b))
  else
    exit()
}
if __name__ == "__main__"
a = float(input())
b = float(input())
Where_dafuq_dafuntion(a,b)
a = int(input())
b = int(input())
Where_dafuq_dafuntion(a,b)
a = float(input())
b = int(input())
