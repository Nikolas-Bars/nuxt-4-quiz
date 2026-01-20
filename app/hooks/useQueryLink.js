export default function useQueryLink() {
  
  const formatQueryStr = (params) => {
    const str = [];

    for (let param in params) {
        if (params.hasOwnProperty(param)) {
          str.push(encodeURIComponent(param) + "=" + encodeURIComponent(params[param]));
        }
    }
  
    const formatStr = str.join("&");

    return formatStr;
  }
  
  return { formatQueryStr }
}
