function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) { return "DIRECT"; }
  return "PROXY 142.111.48.253:7030; DIRECT";
}