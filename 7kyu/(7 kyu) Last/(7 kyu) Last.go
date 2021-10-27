package kata;

import "reflect";

func Last(xs interface{}) interface{} {
  r := reflect.ValueOf(xs);
  
  if r.Kind() == reflect.String {
    var s = xs.(string);
    return s[len(s)-1:]
  }
  
  return r.Index(r.Len()-1).Interface();
}
