# Declock

Code

Introducing Declock, a timekeeping system that displays time in decimal days without the need for hours, minutes, or seconds.

Author

[Martin Laptev](https://maptv.github.io)

Published

2026+242

Modified

2026+255

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODI5LjY4NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJmbG93Y2hhcnQgZGVjbmF2LXN2ZyIgdmlld2JveD0iMCAwIDgyOS42ODc1IDk0IiByb2xlPSJncmFwaGljcy1kb2N1bWVudCBkb2N1bWVudCIgYXJpYS1yb2xlZGVzY3JpcHRpb249ImZsb3djaGFydC12MiIgaGVpZ2h0PSI5NCI+CjxnPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjUiIHJlZnk9IjUiIG1hcmtlcnVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFya2Vyd2lkdGg9IjgiIG1hcmtlcmhlaWdodD0iOCIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNIDAgMCBMIDEwIDUgTCAwIDEwIHoiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiAvPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRTdGFydCIgY2xhc3M9Im1hcmtlciBmbG93Y2hhcnQtdjIiIHZpZXdib3g9IjAgMCAxMCAxMCIgcmVmeD0iNC41IiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSI4IiBtYXJrZXJoZWlnaHQ9IjgiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTSAwIDUgTCAxMCAxMCBMIDEwIDAgeiIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIC8+PC9tYXJrZXI+PG1hcmtlciBpZD0ibWVybWFpZC0xNzg5Nzk1ODg3NTk3X2Zsb3djaGFydC12Mi1jaXJjbGVFbmQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjExIiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSIxMSIgbWFya2VyaGVpZ2h0PSIxMSIgb3JpZW50PSJhdXRvIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiPjwvY2lyY2xlPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY2lyY2xlU3RhcnQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9Ii0xIiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSIxMSIgbWFya2VyaGVpZ2h0PSIxMSIgb3JpZW50PSJhdXRvIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiPjwvY2lyY2xlPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY3Jvc3NFbmQiIGNsYXNzPSJtYXJrZXIgY3Jvc3MgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTEgMTEiIHJlZng9IjEyIiByZWZ5PSI1LjIiIG1hcmtlcnVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFya2Vyd2lkdGg9IjExIiBtYXJrZXJoZWlnaHQ9IjExIiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiAvPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY3Jvc3NTdGFydCIgY2xhc3M9Im1hcmtlciBjcm9zcyBmbG93Y2hhcnQtdjIiIHZpZXdib3g9IjAgMCAxMSAxMSIgcmVmeD0iLTEiIHJlZnk9IjUuMiIgbWFya2VydW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXJrZXJ3aWR0aD0iMTEiIG1hcmtlcmhlaWdodD0iMTEiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTSAxLDEgbCA5LDkgTSAxMCwxIGwgLTksOSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIC8+PC9tYXJrZXI+PGcgY2xhc3M9InJvb3QiPjxnIGNsYXNzPSJjbHVzdGVycyI+PC9nPjxnIGNsYXNzPSJlZGdlUGF0aHMiPjxwYXRoIGQ9Ik0xMjAuOTIyLDQ3TDEyNS4wODksNDdDMTI5LjI1NSw0NywxMzcuNTg5LDQ3LDE0NS4yNTUsNDdDMTUyLjkyMiw0NywxNTkuOTIyLDQ3LDE2My40MjIsNDdMMTY2LjkyMiw0NyIgaWQ9IkxfQV9CXzAiIGNsYXNzPSJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGVkZ2UtdGhpY2tuZXNzLW5vcm1hbCBlZGdlLXBhdHRlcm4tc29saWQgZmxvd2NoYXJ0LWxpbmsiIHN0eWxlPSI7IiBkYXRhLWVkZ2U9InRydWUiIGRhdGEtZXQ9ImVkZ2UiIGRhdGEtaWQ9IkxfQV9CXzAiIGRhdGEtcG9pbnRzPSJXM3NpZUNJNk1USXdMamt5TVRnM05Td2llU0k2TkRkOUxIc2llQ0k2TVRRMUxqa3lNVGczTlN3aWVTSTZORGQ5TEhzaWVDSTZNVGN3TGpreU1UZzNOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjxwYXRoIGQ9Ik0yOTUuNzAzLDQ3TDI5OS44Nyw0N0MzMDQuMDM2LDQ3LDMxMi4zNyw0NywzMjAuMDM2LDQ3QzMyNy43MDMsNDcsMzM0LjcwMyw0NywzMzguMjAzLDQ3TDM0MS43MDMsNDciIGlkPSJMX0JfQ18wIiBjbGFzcz0iZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIiBzdHlsZT0iOyIgZGF0YS1lZGdlPSJ0cnVlIiBkYXRhLWV0PSJlZGdlIiBkYXRhLWlkPSJMX0JfQ18wIiBkYXRhLXBvaW50cz0iVzNzaWVDSTZNamsxTGpjd016RXlOU3dpZVNJNk5EZDlMSHNpZUNJNk16SXdMamN3TXpFeU5Td2llU0k2TkRkOUxIc2llQ0k2TXpRMUxqY3dNekV5TlN3aWVTSTZORGQ5WFE9PSIgbWFya2VyLWVuZD0idXJsKCNtZXJtYWlkLTE3ODk3OTU4ODc1OTdfZmxvd2NoYXJ0LXYyLXBvaW50RW5kKSIgLz48cGF0aCBkPSJNNDcxLjUzMSw0N0w0NzUuNjk4LDQ3QzQ3OS44NjUsNDcsNDg4LjE5OCw0Nyw0OTUuODY1LDQ3QzUwMy41MzEsNDcsNTEwLjUzMSw0Nyw1MTQuMDMxLDQ3TDUxNy41MzEsNDciIGlkPSJMX0NfRF8wIiBjbGFzcz0iZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIiBzdHlsZT0iOyIgZGF0YS1lZGdlPSJ0cnVlIiBkYXRhLWV0PSJlZGdlIiBkYXRhLWlkPSJMX0NfRF8wIiBkYXRhLXBvaW50cz0iVzNzaWVDSTZORGN4TGpVek1USTFMQ0o1SWpvME4zMHNleUo0SWpvME9UWXVOVE14TWpVc0lua2lPalEzZlN4N0luZ2lPalV5TVM0MU16RXlOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjxwYXRoIGQ9Ik02NDYuNjA5LDQ3TDY1MC43NzYsNDdDNjU0Ljk0Myw0Nyw2NjMuMjc2LDQ3LDY3MC45NDMsNDdDNjc4LjYwOSw0Nyw2ODUuNjA5LDQ3LDY4OS4xMDksNDdMNjkyLjYwOSw0NyIgaWQ9IkxfRF9FXzAiIGNsYXNzPSJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGVkZ2UtdGhpY2tuZXNzLW5vcm1hbCBlZGdlLXBhdHRlcm4tc29saWQgZmxvd2NoYXJ0LWxpbmsiIHN0eWxlPSI7IiBkYXRhLWVkZ2U9InRydWUiIGRhdGEtZXQ9ImVkZ2UiIGRhdGEtaWQ9IkxfRF9FXzAiIGRhdGEtcG9pbnRzPSJXM3NpZUNJNk5qUTJMall3T1RNM05Td2llU0k2TkRkOUxIc2llQ0k2TmpjeExqWXdPVE0zTlN3aWVTSTZORGQ5TEhzaWVDSTZOamsyTGpZd09UTTNOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVscyI+PGcgY2xhc3M9ImVkZ2VMYWJlbCI+PGcgY2xhc3M9ImxhYmVsIiBkYXRhLWlkPSJMX0FfQl8wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiBjbGFzcz0ibGFiZWxCa2ciIGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHA+PHNwYW4gY2xhc3M9ImVkZ2VMYWJlbCI+PC9zcGFuPjwvcD4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjxnIGNsYXNzPSJlZGdlTGFiZWwiPjxnIGNsYXNzPSJsYWJlbCIgZGF0YS1pZD0iTF9CX0NfMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxmb3JlaWdub2JqZWN0IHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjxkaXYgY2xhc3M9ImxhYmVsQmtnIiBkYXRhLXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogdGFibGUtY2VsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgbGluZS1oZWlnaHQ6IDEuNTsgbWF4LXdpZHRoOiAyMDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CjxwPjxzcGFuIGNsYXNzPSJlZGdlTGFiZWwiPjwvc3Bhbj48L3A+CjwvZGl2Pgo8L2ZvcmVpZ25vYmplY3Q+PC9nPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVsIj48ZyBjbGFzcz0ibGFiZWwiIGRhdGEtaWQ9IkxfQ19EXzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj48Zm9yZWlnbm9iamVjdCB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48ZGl2IGNsYXNzPSJsYWJlbEJrZyIgZGF0YS14bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxpbmUtaGVpZ2h0OiAxLjU7IG1heC13aWR0aDogMjAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPgo8cD48c3BhbiBjbGFzcz0iZWRnZUxhYmVsIj48L3NwYW4+PC9wPgo8L2Rpdj4KPC9mb3JlaWdub2JqZWN0PjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbCI+PGcgY2xhc3M9ImxhYmVsIiBkYXRhLWlkPSJMX0RfRV8wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiBjbGFzcz0ibGFiZWxCa2ciIGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHA+PHNwYW4gY2xhc3M9ImVkZ2VMYWJlbCI+PC9zcGFuPjwvcD4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvZz48ZyBjbGFzcz0ibm9kZXMiPjxhIGhyZWY9Ii4uLy4uL2RlYyIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUEtMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuNDYwOTM3NSwgNDcpIj48cmVjdCBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIiBzdHlsZSB4PSItNTYuNDYwOTM3NSIgeT0iLTM5IiB3aWR0aD0iMTEyLjkyMTg3NSIgaGVpZ2h0PSI3OCIgLz48ZyBjbGFzcz0ibGFiZWwiIHN0eWxlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi40NjA5Mzc1LCAtMjQpIj48cmVjdCAvPjxmb3JlaWdub2JqZWN0IHdpZHRoPSI1Mi45MjE4NzUiIGhlaWdodD0iNDgiPjxkaXYgZGF0YS14bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxpbmUtaGVpZ2h0OiAxLjU7IG1heC13aWR0aDogMjAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPgo8c3BhbiBjbGFzcz0ibm9kZUxhYmVsIj4KPHA+CkRlYwo8L3A+CjxwPjwvcD48L3NwYW4+CjwvZGl2Pgo8L2ZvcmVpZ25vYmplY3Q+PC9nPjwvZz48L2E+PGEgaHJlZj0iLi4vLi4vZGVjL2RhdGUiIGNsYXNzPSJkZWNuYXYtbGluayBuby1leHRlcm5hbCI+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1CLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMy4zMTI1LCA0NykiPjxyZWN0IGNsYXNzPSJiYXNpYyBsYWJlbC1jb250YWluZXIiIHN0eWxlIHg9Ii02Mi4zOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNC43ODEyNSIgaGVpZ2h0PSI3OCIgLz48ZyBjbGFzcz0ibGFiZWwiIHN0eWxlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi4zOTA2MjUsIC0yNCkiPjxyZWN0IC8+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjY0Ljc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpkYXRlCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvdGltZSIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDA4LjYxNzE4NzUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjkxNDA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS44MjgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTE0MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuODI4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgp0aW1lCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvc25hcCIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUQtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTg0LjA3MDMxMjUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjUzOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS4wNzgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuNTM5MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuMDc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpzbmFwCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvc3BhbiIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUUtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzU5LjE0ODQzNzUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjUzOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS4wNzgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuNTM5MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuMDc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpzcGFuCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48L2c+PC9nPjwvZz48L3N2Zz4=)

#### 0 Declock

My website provides many examples of the [Quarto](https://quarto.org) publishing and the [Dec](../../dec) measurement systems in action. I leverage Quarto support for the [Observable](https://observablehq.com/) data analysis and visualization system to create animated and interactive graphics like the [bar📊charts](https://en.wikipedia.org/wiki/Bar_chart) clocks🕓, [solar☀️terminator](https://en.wikipedia.org/wiki/Terminator_%28solar%29#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body) map🗺, [Earth🌍orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit) diagram, and [daylight](https://en.wikipedia.org/wiki/Daylight#:~:text=the%20combination%20of%20all%20direct%20and%20indirect%20sunlight%20during%20the%20daytime) [area chart](https://en.wikipedia.org/wiki/Area_chart#:~:text=The%20area%20between%20axis%20and%20line%20are%20commonly%20emphasized%20with%20colors) below.

Dec times are measured in [fractional days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days:~:text=a%20decimal%20fraction%20of%20a%20day), often using [metric prefixes](https://en.wikipedia.org/wiki/Metric_prefix#:~:text=a%20unit%20prefix%20that%20precedes%20a%20basic%20unit%20of%20measure%20to%20indicate%20a%20multiple%20or%20submultiple%20of%20the%20unit) like [deci](https://en.wikipedia.org/wiki/Deci-#:~:text=a%20decimal%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20tenth), [centi](https://en.wikipedia.org/wiki/Centi-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20hundredth), or [milli](https://en.wikipedia.org/wiki/Milli-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20thousandth). The top, middle, and bottom bars indicate the [decidays](https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays), [millidays](https://en.wikipedia.org/wiki/Unit_of_time#:~:text=1.44%20minutes%2C%20or%2086.4%20seconds), and [centimillidays](https://en.wikipedia.org/wiki/Decimal_time#:~:text=which%20would%20be-,1/100%2C000%20day,-%2C%20or%20864%20milliseconds), respectively, of the time since the start, , or until the end, , of the day in the Zone , the Dec [time zone](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time) selected by the red⭕️circle on the map beneath the bars.

To rotate the globe🌐in the Earth🌏orbit diagram, drag the red circle horizontally↔︎️or slide the red🔴dot on the daylight area chart vertically↕. The red circle’s vertical position determines the yearly daylight pattern visualized by the area chart. Shift the vertical red—line on the area chart horizontally to move the globe along the ellipse of the Earth🌎orbit.

#### Bar chart clocks

#### Longitude latitude map

#### Daylight area chart

#### 1 Annual day aggregate (ada)

The red line indicates a “day of year” ([doy](#doy)): , which identifies a day in a year like a [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world) month and “day of month” ([dom](#dom)). The red dot denotes a “time of day” ([tod](#tod)): , which specifies a point in a day like an “hour minute second” ([hms](#hms)) triplet. Together, a [doy](#doy) and [tod](#tod) can form an “annual day aggregate” ([ada](#ada)):  + ÷ 1000 = .

$$\begin{split}
\text{doy} &= \lfloor\text{ada}\rfloor \\
&= \text{ada} - \text{tod}
\end{split}
\tag{1}$$

As their names suggest, [doy](#doy) and [ada](#ada) are measured in days. The [measurement unit](https://en.wikipedia.org/wiki/Unit_of_measurement#:~:text=a%20definite%20magnitude%20of%20a%20quantity) of a [tod](#tod) can be a day or a [submultiple](https://en.wikipedia.org/wiki/Multiple_%28mathematics%29#Submultiple:~:text=of%20%22a%20being-,a%20unit%20fraction,-of%20b%22%20) of a day with a metric prefix. By changing how a decimal [tod](#tod) is measured, we can shift its [decimal separator](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=a%20symbol%20that%20separates%20the%20integer%20part%20from%20the%20fractional%20part%20of%20a%20number) or turn it into an integer. The [tod](#tod) along the y-axis of the area chart are integers because they have three digits and are measured in millidays.

#### 2 Epochal day aggregate (eda)

To obtain a [tod](#tod) from an [ada](#ada), we can [keep the remainder after dividing](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder) by one to isolate the [decimal part](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part) of the [quotient](https://en.wikipedia.org/wiki/Quotient#:~:text=a%20quantity%20produced%20by%20the%20division%20of%20two%20numbers): [−⌊](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder) 1 = 0.. We can use this same approach to separate a [tod](#tod) from an “epochal day aggregate” ([eda](#eda)): −⌊ 1 = 0.. The current [eda](#eda) tells us how many days have passed since the Dec [epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era): Year 0 Day 0 [Tod](#tod) 0.

$$\text{dividend} \href{https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder%20or%20signed%20remainder%20of%20a%20division}{\mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}} \text{modulus} = \text{dividend} - \text{modulus} \ast \left\lfloor\dfrac{\text{dividend}}{\text{modulus}}\right\rfloor \tag{2}$$

$$\begin{split}
\text{tod} &= \text{ada} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \\
&= \text{eda} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1
\end{split} \tag{3}$$

##### UNIX time equation

Similarly, [UNIX time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970%2C%20the%20Unix%20epoch) tallies the seconds since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time#:~:text=00%3A00%3A00%20UTC%20on%201%C2%A0January%201970), which is exactly 719468 days after the Dec epoch. To get the [tod](#tod) in Zone 0, the Dec time zone that is in between the two leftmost vertical lines on the map, we can divide UNIX time by the [number of seconds in a day](https://en.wikipedia.org/wiki/Day#:~:text=average%2C%20this%20is-,24%20hours%20(86%2C400%20seconds),-.%20As%20a%20day) and then keep the remainder after dividing the resulting days by 1 as in [Equation 4](#eq-unixtod).

$$\text{tod} = \text{unix} \div 86400 \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{4}$$

##### Julian date equation

[Julian dates](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon) track the days since the beginning of the [Julian period](https://en.wikipedia.org/wiki/Julian_day#:~:text=a%20chronological%20interval%20of%207980%C2%A0years%2C%20derived%20from%20three%20multi%2Dyear%20cycles:%20the%20Indiction%2C%20Solar%2C%20and%20Lunar%20cycles) and thus are akin to [eda](#eda). We can produce a Zone 5 [tod](#tod) from a [Julian date](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon) simply by keeping the remainder after dividing by one. If we want a Zone 0 [tod](#tod) instead, we should add 5 decidays to the Julian date, divide the sum by one, and then keep the remainder as in [Equation 5](#eq-juliantod) below.

$$\text{tod} = (\text{julian} + 0.5) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{5}$$

#### 3 Hour minute second (hms)

We can also obtain a Zone 0 [tod](#tod) from a [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time) ([UTC](#utc)) [hms](#hms) triplet by summing its components after converting them to fractional days, as shown in the equation below. The [computer programming](https://en.wikipedia.org/wiki/Computer_programming#:~:text=the%20composition%20of%20sequences%20of%20instructions%2C%20called%20programs%2C%20that%20computers%20can%20follow%20to%20perform%20tasks) code in the [tabset panel](https://quarto.org/docs/interactive/layout.html#tabset-panel) beneath the equation compares [tod](#tod) derived from [UTC](#utc) and UNIX time as Quarto was [rendering](https://quarto.org/docs/get-started/hello/rstudio.html#rendering:~:text=When%20rendering%2C%20Quarto%20generates%20a%20new%20file%20that%20contains%20selected%20text%2C%20code%2C%20and%20results) this webpage.

$$\text{tod} = \dfrac{\text{hour}}{24} + \dfrac{\text{minute}}{1440} + \dfrac{\text{second}}{86400} \tag{6}$$

## Julia

``` julia
using Dates
hms = now(UTC)
```

    2026-10-30T14:47:26.076

``` julia
hour(hms) / 24 +
minute(hms) / 1440 +
second(hms) / 86400 +
millisecond(hms) / 864e5
```

    0.6162740277777777

``` julia
datetime2unix(hms) / 86400 % 1
```

    0.616274027775944

## Observable JavaScript

``` js
hms = new Date();
hms.getUTCHours() / 24 +
hms.getUTCMinutes() / 1440 +
hms.getUTCSeconds() / 86400 +
hms.getUTCMilliseconds() / 864e5;
```

``` js
hms.getTime() / 864e5 % 1;
```

## Python

``` python
from datetime import datetime, timezone
hms = datetime.now(timezone.utc)
hms.hour / 24 + \
hms.minute / 1440 + \
hms.second / 86400 + \
hms.microsecond / 864e8
```

    0.6162818051388889

``` python
hms.timestamp() / 86400 % 1
```

    0.6162818051379872

## R

``` downlit
hms <- as.POSIXlt(Sys.time(), tz = "UTC")
hms$hour / 24 +
hms$min / 1440 +
hms$sec / 86400
```

    [1] 0.616282

``` downlit
(as.numeric(as.POSIXct(hms)) / 86400) %% 1
```

    [1] 0.616282

Equations [7](#eq-dsa) to [11](#eq-som) below convert UNIX time or a Zone 0 [tod](#tod) into the three components of an [hms](#hms) triplet: the “hour of day” ([hod](#hod)), “minute of hour” ([moh](#moh)), and “second of minute” ([som](#som)), using a “daily second aggregate” ([dsa](#dsa)) and “hourly second aggregate” ([hsa](#hsa)). While both count seconds, [dsa](#dsa) start at midnight ([Tod](#tod) 0) and [hsa](#hsa) begin at the [top of the hour](https://en.wiktionary.org/wiki/top_of_the_hour).

$$\begin{split}
\text{dsa} & = \text{tod} \ast 86400 \\
& = \text{unix} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}  86400
\end{split}
\tag{7}$$ $$\text{hsa} = \text{dsa} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}  3600
\tag{8}$$ $$\text{hod} = \lfloor \text{dsa} \div 3600 \rfloor
\tag{9}$$ $$\text{moh} = \lfloor \text{hsa} \div 60 \rfloor
\tag{10}$$ $$\text{som} = \lfloor \text{hsa} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}  60 \rfloor
\tag{11}$$

## Julia

``` julia
using Dates
dsa = datetime2unix(now(UTC)) / 86400 % 1 * 86400
```

    53246.80799993221

``` julia
hsa = dsa % 3600
```

    2846.807999932207

``` julia
map(x -> floor(Int, x), (dsa / 3600, hsa / 60, hsa % 60))
```

    (14, 47, 26)

## Observable JavaScript

``` js
dsa = Date.now() / 864e5 % 1 * 86400;
hsa = dsa % 3600;
[dsa / 3600, hsa / 60, hsa % 60].map(Math.floor)
```

## Python

``` python
from datetime import datetime, timezone
dsa = datetime.now(timezone.utc).timestamp() / 86400 % 1 * 86400
hsa = dsa % 3600
tuple(map(int, [dsa // 3600, hsa // 60, hsa % 60 // 1]))
```

    (14, 47, 26)

## R

``` downlit
dsa <- (as.numeric(as.POSIXct(Sys.time())) / 86400) %% 1 * 86400
hsa <- dsa %% 3600
sapply(c(dsa %/% 3600, hsa %/% 60, hsa %% 60), as.integer)
```

    [1] 14 47 26

#### 4 Universal time offset (uto)

The [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System#:~:text=a%20satellite%2Dbased%20hyperbolic%20navigation%20system), [BeiDou](https://en.wikipedia.org/wiki/BeiDou#:~:text=a%20satellite%2Dbased%20radio%20navigation%20system), and [Galileo](https://en.wikipedia.org/wiki/Galileo_(satellite_navigation)#:~:text=a%20global%20navigation%20satellite%20system%20(GNSS)%20created%20by%20the%20European%20Union) [global navigation satellite systems](https://en.wikipedia.org/wiki/Satellite_navigation#:~:text=a%20satellite%20navigation%20system%20with%20global%20coverage) along with most — if not all — [programming languages](https://en.wikipedia.org/wiki/Programming_language#:~:text=a%20system%20of%20notation%20for%20writing%20source%20code%20such%20as%20used%20to%20produce%20a%20computer%20program) do not account for [leap seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment), which appears to be for the best given that leap seconds [can cause problems](https://www.nist.gov/pml/time-and-frequency-division/leap-seconds-faqs#:~:text=detriments%20to%20adding%20leap%20seconds) and will be abolished no later than 2027+081 according to the [International Bureau of Weights and Measures](https://en.wikipedia.org/wiki/International_Bureau_of_Weights_and_Measures#:~:text=an%20intergovernmental%20organisation%20(IGO)%2C%20through%20which%20its%2067%20member%2Dstates%20act%20on%20measurement%20standards).

On or before the deadline to abolish leap seconds, the tolerance for disagreement between [UTC](#utc) and [Universal Time](https://en.wikipedia.org/wiki/Universal_Time#Versions:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation) ([UT](#ut)) will increase from [1 Dec second](https://en.wikipedia.org/wiki/Leap_second#:~:text=to%20ensure%20that%20the%20difference%20between%20the%20UTC%20and%20UT1%20readings%20will%20never%20exceed%200.9%20seconds) ([s](#s)) to 3750 [s](#s). Since 1972+122, only [27](https://en.wikipedia.org/wiki/Leap_second#:~:text=27%20leap%20seconds%20have%20been%20added%20to%20UTC) leap seconds have been inserted, which is 0.75% of 3750 [s](#s), and at this rate it will take over five millennia for the disparity between [UT](#ut) and [UTC](#utc) to reach 3750 [s](#s).

Instead of leap seconds, Dec matches [UT](#ut) using a “[universal time](https://en.wikipedia.org/wiki/Universal_Time#:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation) [offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)” ([uto](#uto)). With the [leap second insertion dates](https://en.wikipedia.org/wiki/Leap_second#:~:text=Announced%20leap%20seconds%20to%20date) provided by the [International Earth Rotation and Reference Systems Service](https://en.wikipedia.org/wiki/International_Earth_Rotation_and_Reference_Systems_Service#:~:text=the%20body%20responsible%20for%20maintaining%20global%20time%20and%20reference%20frame%20standards), we can approximate the [uto](#uto) that yields [UT](#ut) when added to the Zone 0 [tod](#tod) on the [Dec date](../../dec/date) chosen by the [range](https://observablehq.com/framework/inputs/range)🎚️inputs below: ÷ 8640 = ÷ 90000 = .

#### 5 Second interval difference (sid)

The equation above divides leap seconds by the number of [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement) ([SI](#si)) seconds ([sis](#sis)) or Dec deciseconds ([ds](#ds)) in a deciday ([dd](#dd)): 8640 [sis](#sis) = 90000 [ds](#ds) = 1 [dd](#dd). To avoid [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal#:~:text=the%20same%20sequence%20of%20digits%20is%20repeated%20forever) when turning [sis](#sis) into [ds](#ds), we can put a Dec [quadravigesimal](https://en.wikipedia.org/wiki/List_of_numeral_systems#:~:text=24-,Quadravigesimal,-%5B48%5D) (base24) digit in place of the ones digit and decimal part of the [ds](#ds): = × 10 + ÷ 2.4.

Known as a “second interval difference” ([sid](#sid)), the base24 ([b24](#b24)) character at the end of is a letter of the [Greek alphabet](https://en.wikipedia.org/wiki/Greek_alphabet#:~:text=the%20writing%20system%20used%20for%20the%20Greek%20language). To display [sis](#sis) in [ds](#ds), we can concatenate the integer part of the [s](#s) we obtain from [Equation 12](#eq-sis) with the [b24](#b24) representation of the [sid](#sid) we get from [Equation 13](#eq-sid). The table beneath these equations lists [base10](https://en.wikipedia.org/wiki/Decimal#:~:text=a%20numeral%20system%20that%20uses%20ten%20as%20its%20radix%20%28base%29) ([b10](#b10)) and [b24](#b24) equivalents.

$$\text{s} = \dfrac{\text{ds}}{10} = \dfrac{\text{sis}}{0.96}
\tag{12}$$ $$\begin{split}
\text{sid} &= \text{sis} \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 24\\
&= (\text{s} - \text{sis}) \ast 24 \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 24
\end{split}
\tag{13}$$

##### Base24

| [b10](#b10) | [b24](#b24) | [b10](#b10) | [b24](#b24) | [b10](#b10) | [b24](#b24) | [b10](#b10) | [b24](#b24) |
|----|----|----|----|----|----|----|----|
| 0 | α | 6 | η | 12 | ν | 18 | τ |
| 1 | β | 7 | θ | 13 | ξ | 19 | υ |
| 2 | γ | 8 | ι | 14 | ο | 20 | φ |
| 3 | δ | 9 | κ | 15 | π | 21 | χ |
| 4 | ε | 10 | λ | 16 | ρ | 22 | ψ |
| 5 | ζ | 11 | μ | 17 | σ | 23 | ω |

| [b10](#b10) | [b24](#b24) | [b10](#b10) | [b24](#b24) |
|-------------|-------------|-------------|-------------|
| 0           | α           | 12          | ν           |
| 1           | β           | 13          | ξ           |
| 2           | γ           | 14          | ο           |
| 3           | δ           | 15          | π           |
| 4           | ε           | 16          | ρ           |
| 5           | ζ           | 17          | σ           |
| 6           | η           | 18          | τ           |
| 7           | θ           | 19          | υ           |
| 8           | ι           | 20          | φ           |
| 9           | κ           | 21          | χ           |
| 10          | λ           | 22          | ψ           |
| 11          | μ           | 23          | ω           |

| [b10](#b10) | [b24](#b24) |
|-------------|-------------|
| 0           | α           |
| 1           | β           |
| 2           | γ           |
| 3           | δ           |
| 4           | ε           |
| 5           | ζ           |
| 6           | η           |
| 7           | θ           |
| 8           | ι           |
| 9           | κ           |
| 10          | λ           |
| 11          | μ           |
| 12          | ν           |
| 13          | ξ           |
| 14          | ο           |
| 15          | π           |
| 16          | ρ           |
| 17          | σ           |
| 18          | τ           |
| 19          | υ           |
| 20          | φ           |
| 21          | χ           |
| 22          | ψ           |
| 23          | ω           |

Table 1

##### Base9

Whereas [b24](#b24) is like glue that allows us to combine [s](#s) and [sid](#sid), Dec [nonary](https://en.wikipedia.org/wiki/Ternary_numeral_system#Compact_ternary_representation:_base_9_and_27:~:text=base%209%2C%20each%20digit%20is%20two%20ternary%20digits) (base9) enables us to append [s](#s) to a [tod](#tod). The table below shows the [astronomical symbols](https://en.wikipedia.org/wiki/Astronomical_symbol#:~:text=symbols%20used%20to%20represent%20astronomical%20objects) used by Dec for base9 ([b9](#b9)). When we replace the “decimilliday” ([dmd](#dmd)) digit in a [b10](#b10) [tod](#tod) with a [b9](#b9) digit, the [b9](#b9) digit counts tens of [s](#s) instead of [dmd](#dmd) and the next digit tracks [s](#s) instead of “centimillidays” ([cmd](#cmd)).

| [b10](#b10) | [b9](#b9) | [b10](#b10) | [b9](#b9) | [b10](#b10) | [b9](#b9) |
|-------------|-----------|-------------|-----------|-------------|-----------|
| 0           | ☉         | 3           | ♁         | 6           | ♄         |
| 1           | ☿         | 4           | ♂         | 7           | ♅         |
| 2           | ♀         | 5           | ♃         | 8           | ♆         |

| [b10](#b10) | [b9](#b9) |
|-------------|-----------|
| 0           | ☉         |
| 1           | ☿         |
| 2           | ♀         |
| 3           | ♁         |
| 4           | ♂         |
| 5           | ♃         |
| 6           | ♄         |
| 7           | ♅         |
| 8           | ♆         |

Table 2

A [tod](#tod) with four [b10](#b10) digits, one [b9](#b9), and one [b24](#b24) digit can match the time represented by any [hms](#hms) triplet, because the product of the bases of its digits is evenly divisible by the number of [sis](#sis) in a day: 10000 × 9 × 24 ÷ 86400 = 216000 ÷ 86400 = 25. For [hod](#hod), one [b24](#b24) digit is sufficient. The [hms](#hms) triplet selected by the range inputs below corresponds to [Hod](#hod) and [Tod](#tod) .

In [Table 3](#tbl-time) below, the quotidie ([q](#q)) column shows how many multiples of the unit in each row can fit into one day and the [md](#md) column uses endings called Dec terminators to transform the fraction of a day that each unit represents from a repeating decimal into a [terminating decimal](https://en.wikipedia.org/wiki/Repeating_decimal#:~:text=a%20finite%20number%20of%20nonzero%20digits). The [b9](#b9) digit in the terminators in [Table 3](#tbl-time) represents 6 decaseconds ([Ds](#decasec)): 6 ÷ 9 = 0.♄.

| Time units                                     | [q](#q) | [md](#md) |
|------------------------------------------------|--------:|:----------|
| [hour](https://en.wikipedia.org/wiki/Hour)     |      24 | 41.♄      |
| [minute](https://en.wikipedia.org/wiki/Minute) |    1440 |  0.♄η     |
| [sis](#sis)                                    |   86400 |  0.0☿β    |
| [s](#s)                                        |   90000 |  0.0☿     |

Table 3

#### 6 Coordinated Universal Time

Rather than use a terminator as in [Table 3](#tbl-time), Dec expresses one hour in [dd](#dd) as a single [b24](#b24) digit: 0.41♄ = β. If we add β [dd](#dd) to the Zone 0 [tod](#tod), we get the [tod](#tod) associated with the [UTC+1 offset](https://en.wikipedia.org/wiki/UTC%2B01:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B01%3A00): 0. + β ÷ 10 = . Currently, the Zone 0 Dec time is −0 and the UTC+1 Dec time is −β. Dec times consist of a [tod](#tod), a minus sign (−), and an offset.

There are 12 [UTC](#utc) offsets that become a terminating decimals after being converted from hours to days and therefore could be displayed in either [b10](#b10) or [b24](#b24). Although it has only ten time zones, Dec can express any [UTC](#utc) offset using one or two non-negative [b24](#b24) digits. There are 27 [UTC](#utc) offsets that require only one [b24](#b24) digit and 11 that need two [b24](#b24) digits.

Out of the [38](https://en.wikipedia.org/wiki/List_of_UTC_offsets) [UTC](#utc) offsets, 14 are negative (\<[UTC](#utc)) and 24 are non-negative (≥[UTC](#utc)). The [UTC](#utc) time zone with [the most negative offset](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00#:~:text=a%20nautical%20time%20zone%20comprising%20the%20high%20seas%20between%20180%C2%B0%20and%20172%C2%B030%E2%80%B2W%20longitude) is completely uninhabited. The bar chart below visualizes the population of each [UTC](#utc) time zone based on 2020 [Socioeconomic Data and Applications Center](https://www.earthdata.nasa.gov/centers/sedac-daac) data. The vast majority of all people live in [UTC](#utc) time zones with ≥[UTC](#utc) offsets.

Negative [UTC](#utc) offsets only exist in [the Americas](https://en.wikipedia.org/wiki/Americas#:~:text=a%20landmass%20comprising%20the%20totality%20of%20North%20America%20and%20South%20America) and islands in the [Atlantic](https://en.wikipedia.org/wiki/List_of_islands_in_the_Atlantic_Ocean) and [Pacific](https://en.wikipedia.org/wiki/List_of_islands_in_the_Pacific_Ocean) Oceans. Therefore, the bar chart above is essentially comparing the populations of the Americas and the rest of the world. According to 2021 [United Nations Department of Economic and Social Affairs](https://en.wikipedia.org/wiki/United_Nations_Department_of_Economic_and_Social_Affairs#:~:text=part%20of%20the%20United%20Nations%20Secretariat) data, roughly 1 billion out of a total of almost 8 billion people live in the Americas.

Dec forbids the association of dates with negative offsets. Therefore, Dec will add ten decidays to any negative offset and add one day to the date associated with that offset. Negative offset handling has no effect on the [tod](#tod) or the conversion of an [hms](#hms) triplet to a [tod](#tod) and is typically only necessary after a “year month day” ([ymd](#ymd)) triplet is converted into a Dec date.

If we do know whether Day 364 belongs to a common or leap year, adding one day to it yields either Day 0 or Day 365 and this uncertainty is expressed as a [multiplication sign](https://en.wikipedia.org/wiki/Multiplication_sign) over the last digit of 365̽. The sign hints that 365̽ is short for 365×`leap`, where 365̽ is either 365 if `leap` is 1 or 0 if `leap` is 0. We can find `leap` by passing any year ([y](#y)) to [Equation 14](#eq-leap) below.

$$\text{leap}=\begin{cases}
  1&{\begin{aligned}
    &\text{ if } (\text{y} + 1)\href{https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder%20or%20signed%20remainder%20of%20a%20division}{\mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}} \ \ \ \ 4=0\\
    &\href{https://en.wikipedia.org/wiki/Logical_conjunction}{\land}(\text{y} + 1)\href{https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder%20or%20signed%20remainder%20of%20a%20division}{\mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}} 100\neq0\\
    &\href{https://en.wikipedia.org/wiki/Logical_disjunction}{\lor}(\text{y} + 1)\href{https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder%20or%20signed%20remainder%20of%20a%20division}{\mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}} 400=0\end{aligned}}\\\\
  0&{\text{ otherwise}}\end{cases}
\tag{14}$$

#### 7 Day of week (dow)

Adding one day to the [doy](#doy) has no effect on the [tod](#tod), but it increments the [dom](#dom) and “day of week” ([dow](#dow)). Dec meets the expectations of [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20currently%20used%20in%20most%20parts%20of%20the%20world) users who live in [UTC](#utc) time zones with negative offsets by essentially deriving the previous [dom](#dom) or [dow](#dow) from the current [doy](#doy) if a location in the Americas is provided without an offset or with a negative offset.

#### 8 Time zone offset (tzo)

In Dec, “time zone offsets” ([tzo](#tzo)) are derived solely from longitude. Dec measures [longitude](https://en.wikipedia.org/wiki/Longitude#:~:text=denoted%20by%20the%20Greek%20letter%20lambda) in [wěi](https://en.wiktionary.org/wiki/%E7%B7%AF#:~:text=(geography)-,latitude,-coordinate%20terms%C2%A0%E2%96%B2) ([w](#w)), arcbeats ([a](#a)), or submultiples thereof. If we travel East or West until we reach our starting point, we will cover 1 [w](#w) or 100000 (10⁵) [a](#a). A [tzo](#tzo) is essentially a deciwěi ([dw](#dw)) longitude that became a single-digit [b10](#b10) integer via [truncation](https://en.wikipedia.org/wiki/Truncation#Truncation_and_floor_function:~:text=truncation%20is%20limiting%20the%20number%20of%20digits%20right%20of%20the%20decimal%20point) or [flooring](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=takes%20as%20input%20a%20real%20number%20x%2C%20and%20gives%20as%20output%20the%20greatest%20integer%20less%20than%20or%20equal%20to%20x): ⌊ ÷ 100⌋ = .

The [Equator](https://en.wikipedia.org/wiki/Equator#:~:text=the%20circle%20of%20latitude%20that%20divides%20Earth%20into%20the%20Northern%20and%20Southern%20Hemispheres) is approximately (~) 1 taur ([c](#c)) or ~10⁵ kilozem ([kz](#kz)) long. Near the Equator, a longitude that has a [precision](https://en.wikipedia.org/wiki/Decimal_degrees#Precision) of 0.1 microwěi ([µw](#uw)) or 10 milliarcbeats ([ma](#ma)) is accurate to within ~0.1 microtaur ([µc](#uc)), ~10 “zone equatorial meters” (zem), or 4 [meters](https://en.wikipedia.org/wiki/Metre#Definition:~:text=the%20base%20unit%20of%20length%20in%20the%20International%20System%20of%20Units), which is about the width of a [U-shaped living room layout](https://www.dimensions.com/collection/living-room-layouts) or the length of a typical [subcompact car](https://www.dimensions.com/collection/subcompact-cars-b-segment).

For precise [geopositioning](https://en.wikipedia.org/wiki/Geopositioning#:~:text=estimating%20the%20geographic%20position%20of%20an%20object%20or%20a%20person), we may want to express [geographic coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system#:~:text=for%20measuring%20and%20communicating%20positions%20directly%20on%20Earth%20as%20latitude%20and%20longitude) in [ma](#ma), but we are unlikely to need [s](#s) or [cmd](#cmd) when displaying the [solar time](https://en.wikipedia.org/wiki/Solar_time#:~:text=a%20calculation%20of%20the%20passage%20of%20time%20based%20on%20the%20position%20of%20the%20Sun%20in%20the%20sky) or estimates of what the [tod](#tod) will be when the Sun rises, reaches its [highest point of the day](https://en.m.wikipedia.org/wiki/Noon#:~:text=highest%20position%20above%20the%20horizon), or sets. By default, Dec uses [md](#md) precision to display a solar time and the “solar time offset” ([sto](#sto)) used to produce it.

#### 9 Solar time offset (sto)

In Dec, any offset can be called a [sto](#sto) or a [uto](#uto), because there will always be a longitude at which the sum of the given offset and the Zone 0 [tod](#tod) will yield solar time or [UT](#ut). In contrast, Dec has only ten [tzo](#tzo), one for each of its ten time zones. Dec translates [UTC](#utc) to Zone 0 and UTC−12 or UTC+12 to Zone 5, but does not categorize any other UTC offset as a [tzo](#tzo).

Dec permits any non-negative offset that is less than one day and can be written with a finite number of [b9](#b9), [b10](#b10), and [b24](#b24) digits. When a [tod](#tod) or an offset does not have a decimal separator, its measurement unit is a submultiple of a day equal to 10^(-[til](#til)) days, where [til](#til) is its “time integer length”, its [level of precision](https://simple.wikipedia.org/wiki/Precision_(numbers)#:~:text=level%20of%20exactness%20in%20a%20number%27s%20digits), or its digit count including any [leading zeros](https://en.wikipedia.org/wiki/Leading_zero#:~:text=any%200%20digit%20that%20comes%20before%20the%20first%20nonzero%20digit).

[Stockholm](https://en.wikipedia.org/wiki/Stockholm#:~:text=the%20capital%20and%20most%20populous%20city%20of%20Sweden), the capital city of [Sweden](https://en.wikipedia.org/wiki/Sweden#:~:text=a%20Nordic%20country%20located%20on%20the%20Scandinavian%20Peninsula%20in%20Northern%20Europe)🇸🇪, is located at ~1 [dw](#dw), almost exactly on the border between Zones 0 and 1. A longitude of 1 [dw](#dw) corresponds to a [sto](#sto) of 05. The [til](#til) of 05 is 2 and therefore its measurement unit is the centiday ([cd](#cd)), which is 10⁻² days. We can use a multiplicative [conversion factor](https://en.wikipedia.org/wiki/Conversion_of_units#:~:text=changes%20the%20unit%20without%20changing%20the%20quantity) of 10⁻² to convert [cd](#cd) to [d](#d): 5 × 10⁻² = 0.05.

Dec uses [currency](https://en.wikipedia.org/wiki/Currency#:~:text=a%20standardized%20form%20of%20money%20used%20as%20a%20medium%20of%20exchange) names for [dd](#dd): [dimes](https://en.wikipedia.org/wiki/Dime#Coins:~:text=coin%29%2C%20a-,ten%2Dcent%20coin,-and%20subunit%20of), [cd](#cd): [cents](https://en.wikipedia.org/wiki/Cent#Currency:~:text=a%20one%2Dhundredth%20subdivision%20of%20several%20units%20of%20currency) (¢), and [md](#md): [mills](https://en.wikipedia.org/wiki/Mill_(currency)#:~:text=a%20subunit%20of%20currency%2C%20used%20in%20several%20countries%20as%201%E2%81%841000%20of%20the%20base%20unit) (₥). Drawing inspiration from music and writing, Dec refers to [dmd](#dmd) as “lines” (l) and [cmd](#md) as “beats” (b). In [poetry](https://en.wikipedia.org/wiki/Poetry#:~:text=a%20form%20of%20literary%20art%20that%20uses%20aesthetic%20and%20often%20rhythmic%5B1%5D%5B2%5D%5B3%5D%20qualities%20of%20language%20to%20evoke%20meanings) and [playwriting](https://en.wikipedia.org/wiki/Playwright#:~:text=For%20the%20ancient%20Greeks%2C%20playwriting%20involved%20po%C3%AFesis%2C%20%22the%20act%20of%20making%22.%20This%20is%20the%20source%20of%20the%20English%20word%20poet.), notably the [works](https://en.wikipedia.org/wiki/List_of_works_by_William_Shakespeare#:~:text=39%20plays%20and%20154%20sonnets) of [William Shakespeare](https://en.wikipedia.org/wiki/William_Shakespeare#:~:text=an%20English%20playwright%2C%20poet%20and%20actor), [decasyllable](https://en.wikipedia.org/wiki/Decasyllable#:~:text=a%20poetic%20meter%20of%20ten%20syllables) and [iambic pentameter](https://en.wikipedia.org/wiki/Iambic_pentameter#:~:text=the%20rhythm%2C%20or%20meter%2C%20established%20by%20the%20words%20in%20each%20line) mandate ten [syllables](https://en.wikipedia.org/wiki/Syllable#:~:text=a%20basic%20unit%20of%20organization%20within%20a%20sequence%20of%20speech%20sounds) per [line](https://en.wikipedia.org/wiki/Line_%28poetry%29#:~:text=a%20unit%20of%20writing%20into%20which%20a%20poem%20or%20play%20is%20divided%3A%20literally%2C%20a%20single%20row%20of%20text). In music, [line](https://en.wikipedia.org/wiki/Line#Terminology_2:~:text=a%20strand%20or%20melody%20of%20music%20played%20by%20an%20individual%20instrument%20or%20voice), [melody](https://en.wikipedia.org/wiki/Melody#:~:text=a%20linear%20succession%20of%20musical%20tones%20that%20the%20listener%20perceives%20as%20a%20single%20entity), [part](https://en.wikipedia.org/wiki/Part_%28music%29#:~:text=a%20component%20of%20a%20musical%20composition), and [tune](https://en.wikipedia.org/wiki/Folk_music#Tune:~:text=a%20short%20instrumental%20piece) are synonyms.

> **WARNING:**
>
> It took me forever and a **deciday** to come up with a pun for Declock⏰. I kept **second**-guessing myself and got really **wound** up, so I decided to take a **beat**. Then, I **zoned** out until it finally **struck** me: it’s about **time**! **Clockwork** orange you glad this pun is **winding** down? It’s The Final🎸**Countdown**!

#### 10 Mean solar time

Outside of Dec, longitudes are often provided in [Greenwich](https://en.wikipedia.org/wiki/Prime_meridian_&28Greenwich&29#:~:text=a%20geographical%20reference%20line%20that%20passes%20through%20the%20Royal%20Observatory%2C%20Greenwich%2C%20in%20London%2C%20England) [degrees](https://en.wikipedia.org/wiki/Degree_%28angle%29#:~:text=a%20unit%20of%20measurement%20of%20a%20plane%20angle%20in%20which%20one%20full%20rotation%20is%20assigned%20the%20value%20of%20360%20degrees) ([g°](#gdeg)). [Equation 15](#eq-deg2wei) converts [g°](#gdeg) to [w](#w) and [Equation 16](#eq-wei2deg) does the opposite. To obtain a [sto](#sto), we can pass [w](#w) to [Equation 17](#eq-wei2sto) or [g°](#gdeg) to [Equation 18](#eq-deg2sto) below. As shown in [Equation 19](#eq-mst) below, we can sum an [sto](#sto) with the Zone 0 [tod](#tod) to get a yearly average of solar time called “[mean solar time](https://en.wikipedia.org/wiki/Solar_time#Mean_solar_time:~:text=it%20follows%20an%20imaginary%20%22mean%20Sun%22%20that%20moves%20along%20the%20celestial%20equator%20at%20a%20constant%20rate%20that%20matches%20the%20real%20Sun%27s%20average%20rate%20over%20the%20year)” ([mst](#mst)).

$$\text{w} = (\text{g}^\circ + 378) \div 360 \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{15}$$

$$\text{g}^\circ = (\text{w} + 0.45) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \times 360 - 180 \tag{16}$$

$$\text{sto} = (0.95 + \text{w}) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{17}$$

$$\text{sto} = (\text{g}^\circ + 360) \div 360 \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{18}$$

$$\text{mst} = (\text{tod} + \text{sto}) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{19}$$

#### 11 Equation of time (eot)

If we want to tailor our solar time calculations to a specific [ada](#ada) instead of an average for the entire year, we can calculate “[apparent solar time](https://en.wikipedia.org/wiki/Solar_time#Apparent_solar_time:~:text=the%20apparent%20motion%20of%20the%20actual%20Sun)” ([ast](#ast)) by summing [mst](#mst) with the “[equation of time](https://en.wikipedia.org/wiki/Equation_of_time#:~:text=the%20discrepancy%20between%20two%20kinds%20of%20solar%20time)” ([eot](#eot)), as shown in [Equation 20](#eq-ast). Obtaining the [eot](#eot) requires a “time of year” ([toy](#toy)), which is an [ada](#ada) that was converted from days to years as displayed in [Equation 21](#eq-toy).

$$\text{ast} = (0.95 + \text{tod} + \text{w} +  \text{eot}) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{20}$$

$$\text{toy} = \text{ada} \div \text{syl} \tag{21}$$

$$\text{syl} = \text{leap} + 365 \tag{22}$$

To obtain a [toy](#toy), we divide an [ada](#ada) by a “solar year length” ([syl](#syl)), which is the number of days in the year. Dec passes the [toy](#toy) directly from [Equation 21](#eq-toy) to the [eot](#eot) function in [Equation 23](#eq-eot) without first multiplying it by 2𝜋 or 𝜏 to convert it from [turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees) ([t](#t)) to [radians](https://en.wikipedia.org/wiki/Radian#:~:text=the%20unit%20of%20angle%20in%20the%20International%20System%20of%20Units) ([rad](#rad)) because the [sin](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=the%20ratio%20of%20the%20length%20of%20the%20side%20opposite%20that%20angle%20to%20the%20length%20of%20the%20longest%20side%20of%20the%20triangle) and [cos](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=the%20ratio%20of%20the%20length%20of%20the%20adjacent%20leg%20to%20that%20of%20the%20hypotenuse) [trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions#:~:text=functions%20which%20relate%20an%20angle%20of%20a%20right%2Dangled%20triangle%20to%20ratios%20of%20two%20side%20lengths) used by Dec are designed for [t](#t) instead of [rad](#rad).

$$\begin{split}
\text{eot} & = \beta_0 \\
& + \beta_1 \ast \text{cos(toy)} \\
& + \beta_2 \ast \text{sin(toy)} \\
& + \beta_3 \ast \text{cos(2} \ast \text{toy)} \\
& + \beta_4 \ast \text{sin(2} \ast \text{toy)}
\end{split} \tag{23}$$

By comparing the `sincost` and `sincos` functions, the code below demonstrates that using [t](#t) rather than [rad](#rad) can [yield more accurate results](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=Representing%20angles%20in%20turns%20or%20half%2Dturns%20has%20accuracy%20advantages). Whereas `sincost` expects to receive [t](#t) and is always correct, `sincos` assumes that it will get [rad](#rad) and generates the slightly incorrect [E notation](https://en.wikipedia.org/wiki/Scientific_notation#E_notation) values below because it cannot produce zero unless its input is zero.

## Julia

``` julia
sincost(x) = sincospi(2 * x)
```

    sincost (generic function with 1 method)

``` julia
sincost(0.25)
```

    (1.0, 0.0)

``` julia
sincost(0.5)
```

    (0.0, -1.0)

``` julia
sincost(0.75)
```

    (-1.0, 0.0)

``` julia
sincost(1)
```

    (0.0, 1.0)

``` julia
sincos(0.25 * 2 * pi)
```

    (1.0, 6.123233995736766e-17)

``` julia
sincos(0.5 * 2 * pi)
```

    (1.2246467991473532e-16, -1.0)

``` julia
sincos(0.75 * 2 * pi)
```

    (-1.0, -1.8369701987210297e-16)

``` julia
sincos(1 * 2 * pi)
```

    (-2.4492935982947064e-16, 1.0)

## Observable JavaScript

``` js
sincospi = require(
  'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@umd/browser.js'
  )
function sincost(x) {
  return sincospi(2 * x);
}
function sincos(x) {
  return [Math.sin(x), Math.cos(x)]
}
sincost(0.25)
```

``` js
sincost(0.5)
```

``` js
sincost(0.75)
```

``` js
sincost(1)
```

``` js
sincos(0.25 * 2 * Math.PI)
```

``` js
sincos(0.5 * 2 * Math.PI)
```

``` js
sincos(0.75 * 2 * Math.PI)
```

``` js
sincos(1 * 2 * Math.PI)
```

## Python

``` python
from math import cos, sin, pi, cospi, sinpi

def sincost(x):
    x *= 2
    return sinpi(x), cospi(x)

def sincos(x):
    return sin(x), cos(x)

sincost(0.25)
```

    (1.0, 0.0)

``` python
sincost(0.5)
```

    (0.0, -1.0)

``` python
sincost(0.75)
```

    (-1.0, 0.0)

``` python
sincost(1)
```

    (0.0, 1.0)

``` python
sincos(0.25 * 2 * pi)
```

    (1.0, 6.123233995736766e-17)

``` python
sincos(0.5 * 2 * pi)
```

    (1.2246467991473532e-16, -1.0)

``` python
sincos(0.75 * 2 * pi)
```

    (-1.0, -1.8369701987210297e-16)

``` python
sincos(1 * 2 * pi)
```

    (-2.4492935982947064e-16, 1.0)

## R

``` downlit
sincost <- function(x) {
  x <- 2 * x
  c(sinpi(x), cospi(x))
}

sincos <- function(x) {
  c(sin(x), cos(x))
}

sincost(0.25)
```

    [1] 1 0

``` downlit
sincost(0.5)
```

    [1]  0 -1

``` downlit
sincost(0.75)
```

    [1] -1  0

``` downlit
sincost(1)
```

    [1] 0 1

``` downlit
sincos(0.25 * 2 * pi)
```

    [1] 1.000000e+00 6.123234e-17

``` downlit
sincos(0.5 * 2 * pi)
```

    [1]  1.224647e-16 -1.000000e+00

``` downlit
sincos(0.75 * 2 * pi)
```

    [1] -1.00000e+00 -1.83697e-16

``` downlit
sincos(1 * 2 * pi)
```

    [1] -2.449294e-16  1.000000e+00

The values below are the coefficients of a [harmonic](https://en.wikipedia.org/wiki/Harmonic#:~:text=positive%20integer%20multiple%20of%20the%20fundamental%20frequency) [model](https://en.wikipedia.org/wiki/Statistical_model#:~:text=embodies%20a%20set%20of%20statistical%20assumptions%20concerning%20the%20generation%20of%20sample%20data), adapted from the [National Oceanic and Atmospheric Administration](https://www.noaa.gov) ([NOAA](#noaa)) [General Solar Position Calculations](https://gml.noaa.gov/grad/solcalc/solareqns.PDF). Before [fitting](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html) the model to [NOAA](#noaa) [yearly solar data](https://gml.noaa.gov/grad/solcalc/calcdetails.html), Dec divides [eot](#eot) values by 1.44 to convert minutes to [md](#md), converts [ymd](#ymd) triplet dates and [hms](#hms) triplet times into [ada](#ada), and sorts by [ada](#ada).

    {0: 0.0011114386869002235,
     1: -4.155124400404918,
     2: -2.9710873225303756,
     3: -4.635570414590801,
     4: 5.116176940364264}

[Source: Bonus examples](eot-preview.llms.md#cell-eotcoef)

In the [line📈chart](https://en.wikipedia.org/wiki/Line_chart#:~:text=a%20type%20of%20chart%20that%20displays%20information%20as%20a%20series%20of%20data%20points%20called%20%27markers%27%20connected%20by%20straight%20line%20segments) above, the [eot](#eot) values range from -9.8 to 11.4 [md](#md) and the range of [doy](#doy), -365 to 365, represents a common year followed by a leap year. The [absolute value](https://en.wikipedia.org/wiki/Absolute_value#:~:text=non%2Dnegative%29-,magnitude%20of,measured%20without%20regard%20to%20its%20sign,-.%20Namely%2C) of the [eot](#eot) reaches about one centiday (cd) on Days 245 and 349, but passes through zero on Days 45, 103, 184, and 299. Therefore, [mst](#mst) and [ast](#ast) are equivalent four times per year.

Apart from transforming an [mst](#mst) into an [ast](#ast), we can also use [eot](#eot) values to more accurately estimate the [tod](#tod) of [solar noon](https://en.wikipedia.org/wiki/Noon#:~:text=reaching%20its%20highest%20position%20above%20the%20horizon%20on%20that%20day%20and%20casting%20the%20shortest%20shadow), sunrise, and sunset. [Equation 24](#eq-solarnoon) below creates a [solar noon](https://en.wikipedia.org/wiki/Noon#:~:text=reaching%20its%20highest%20position%20above%20the%20horizon%20on%20that%20day%20and%20casting%20the%20shortest%20shadow) [tod](#tod) by keeping only the decimal part of the result of subtracting a [w](#w) longitude and an [eot](#eot) value that is measured in days from the sum of 9.55 and a [tzo](#tzo) that is measured in days.

$$\text{solarnoon} = \left(9.55 + \text{tzo} - \text{w} - \text{eot}\right) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \tag{24}$$

#### 12 Cambridge and Cambridge

To compare the solar noon [tod](#tod) in two cities, we can plug the longitude of each city into [Equation 24](#eq-solarnoon) above. If all of the variables other than longitude in [Equation 24](#eq-solarnoon) are set to zero, the resulting solar noon [tod](#tod) is almost five decidays for [Cambridge, England](https://en.wikipedia.org/wiki/Cambridge#:~:text=a%20city%20and%20non%2Dmetropolitan%20district%20in%20the%20county%20of%20Cambridgeshire%2C%20England) in the [United Kingdom](https://en.wikipedia.org/wiki/United_Kingdom#:~:text=a%20country%20in%20Northwestern%20Europe) and nearly seven decidays for [Cambridge, Massachusetts](https://en.wikipedia.org/wiki/Cambridge,_Massachusetts#:~:text=a%20city%20in%20Middlesex%20County%2C%20Massachusetts%2C%20United%20States) in the [United States](https://en.wikipedia.org/wiki/United_States#:~:text=a%20country%20primarily%20located%20in%20North%20America).

$$4.99635 = (9.55 - 0.050365) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \ast 10 \tag{25}$$

$$6.97517 = (9.55 - 0.852484) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \ast 10 \tag{26}$$

The two homonymous cities are about two [dw](#dw) apart and therefore will always differ by around two decidays in solar time, regardless of what time zone we use as our frame of reference. England is in Zone 0 and Massachusetts is in Zone 8. From the perspective of Zone 8, solar noon is roughly [Tod](#tod) 5 in Cambridge, MA and about [Tod](#tod) 3 in Cambridge, UK.

$$2.99635 = (9.55 + 0.8 - 0.050365) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \ast 10 \tag{27}$$

$$4.97517 = (9.55 + 0.8 - 0.852484) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 \ast 10 \tag{28}$$

#### 13 Light arc whole (law)

The path in the sky that the Sun appears to follow from a sunrise to a sunset is a “light [arc](https://en.wikipedia.org/wiki/Sun_path#:~:text=arc%2Dlike%20path%20that%20the%20Sun%20appears%20to%20follow%20across%20the%20sky) whole” ([law](#law)). Solar noon, the midpoint of a [law](#law), is halfway between sunrise and sunset. A [law](#law) can be evenly split into two “light arc halves” ([lah](#lah)). Whereas [tod](#tod) are time points, [law](#law) and [lah](#lah) are durations. The difference between a solar noon [tod](#tod) and a [lah](#lah) is a sunrise [tod](#tod).

$$\text{law} = \text{lah} \ast 2 \tag{29}$$

$$\begin{split}
\text{sunrise}
& = \text{solarmidnight} + \text{nah} \\
& = \text{solarnoon} - \text{lah} \\
& = \text{sunset} - \text{law}
\end{split} \tag{30}$$

$$\begin{split}
\text{sunset}
& = \text{solarmidnight} + \text{nah} + \text{law} \\
& = \text{sunrise} + \text{law} \\
& = \text{solarnoon} + \text{lah} \\
\end{split} \tag{31}$$

#### Night arc whole (naw)

The Sun continues its path after it disappears below the horizon, moving from sunset to sunrise along a “night arc whole” ([naw](#naw)). Like [conjugate angles](https://en.wikipedia.org/wiki/Angle#:~:text=conjugate%20angles%20sum%20to%20a%20full%20angle), a [law](#law) and a [naw](#naw) form a full circle that represents one day. Likewise, a [lah](#lah) and a “night arc half” ([nah](#nah)) are like two [supplementary angles](https://en.wikipedia.org/wiki/Angle#:~:text=sum%20to%20a%20straight%20angle) that form a semicircle from solar noon to the [naw](#naw) midpoint: [solar midnight](https://en.wikipedia.org/wiki/Midnight#:~:text=the%20time%20opposite%20to%20solar%20noon%2C%20when%20the%20Sun%20is%20closest%20to%20the%20nadir%2C%20and%20the%20night%20is%20equidistant%20from%20dusk%20and%20dawn).

$$\text{naw} = \text{nah} \ast 2 \tag{32}$$

$$\begin{split}
\text{day}
& = \text{law} + \text{naw} \\
& = (\text{lah} + \text{nah}) \ast 2
\end{split} \tag{33}$$

$$\begin{split}
\text{solarmidnight}
&= \text{sunrise} - \text{nah} \\
&= \text{solarnoon} - \text{lah} - \text{nah} \\
&= \text{sunset} - \text{law} - \text{nah}
\end{split} \tag{34}$$

The range input below controls the yellow [law](#law) and the blue [naw](#naw) in the diagram beneath it. At the Equator, the sun always rises about a quarter turn from North and sets around three quarter turns from North, resulting in a [law](#law) of roughly half a day: 75% − 25% = 50%. If the [law](#law) is zero, a [polar night](https://en.wikipedia.org/wiki/Polar_night#:~:text=the%20Sun%20remains%20below%20the%20horizon%20for%20more%20than%2024%C2%A0hours) occurs. A day without a [naw](#naw) is called a [polar day](https://en.wikipedia.org/wiki/Midnight_sun#:~:text=the%20Sun%20remains%20visible%20at%20the%20local%20midnight).

#### 14 Solar azimuth angle (saa)

The numbers in the diagram above are “[solar azimuth angle](https://en.wikipedia.org/wiki/Solar_azimuth_angle#:~:text=horizontal%20angle%20with%20respect%20to%20north)” ([saa](#saa)) milliturns ([mt](#mt)). At solar noon, the [saa](#saa) is 0 [mt](#mt) in the [Southern Hemisphere](https://en.wikipedia.org/wiki/Southern_Hemisphere#:~:text=the%20half%20%28hemisphere%29%20of%20Earth%20that%20is%20south%20of%20the%20equator) and 500 [mt](#mt) in the [Northern Hemisphere](https://en.wikipedia.org/wiki/Northern_Hemisphere#:~:text=the%20half%20of%20Earth%20that%20is%20north%20of%20the%20equator). The [radio](https://observablehq.github.io/framework/inputs/radio#:~:text=allows%20the%20user%20to%20choose%20one%20of%20a%20given%20set%20of%20values)📻input above controls whether the midpoint of the [law](#law) is 0 or 500 [mt](#mt). To measure the [saa](#saa) during the [daytime](https://en.wikipedia.org/wiki/Daytime#:~:text=the%20period%20of%20the%20day%20in%20which%20the%20Sun%20is%20above%20the%20local%20horizon%20in%20a%20given%20location), point a compass🧭at the spot on the horizon below the Sun.

#### 15 Solar elevation angle (sea)

The numbers in the diagram above are “\[solar azimuth During an [equinox](https://en.wikipedia.org/wiki/Equinox#:~:text=a%20moment%20in%20time%20when%20the%20Sun%20appears%20directly%20above%20the%20equator) at the Equator, the Sun goes from East to West directly overhead, the [saa](#saa) flips like a switch from 0.25 [t](#t) to 0.75 [t](#t) at solar noon, the”[solar elevation angle](https://en.wikipedia.org/wiki/Solar_zenith_angle#Summary_of_special_angles:~:text=For%20example%2C%20the-,solar,-elevation%20angle%20is)” ([sea](#sea)) peaks at 0.25 [t](#t), and [ast](#ast) is 0.5 − sin([saa](#saa)) × (0.25 − [sea](#sea)). To obtain the [sea](#sea), we can use the height (h) of a vertical rod on a level surface and the length (L) of its shadow: [sea](#sea) = atan2(h, L).

#### 16 Inverse trigonometric functions

In addition to determining the [sea](#sea), the [atan2](https://en.wikipedia.org/wiki/Atan2#:~:text=function%20atan2%20is-,the%202%2Dargument%20arctangent,-.%20By%20definition%2C) function can also be used to calculate [ast](#ast), as shown in [Equation 35](#eq-astjing), where [j](#j) is a latitude measured in turns called [jīng](https://en.wikipedia.org/wiki/Meridian_arc#Full_meridian_(polar_perimeter):~:text=The%20polar%20Earth%27s%20circumference%20is%20simply%20four%20times%20quarter%20meridian) ([j](#j)). In Dec, [inverse trigonometric](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#:~:text=obtain%20an%20angle%20from%20any%20of%20the%20angle%27s%20trigonometric%20ratios) functions like [atan2](https://en.wikipedia.org/wiki/Atan2#:~:text=function%20atan2%20is-,the%202%2Dargument%20arctangent,-.%20By%20definition%2C) yield [t](#t) as opposed to [rad](#rad). At the Equator ([j](#j) = 0), the latitude is zero and [Equation 35](#eq-astjing) simplifies to [ast](#ast) = 0.5 + atan2(-sin([saa](#saa))cos([sea](#sea)), sin([sea](#sea))).

$$\text{ast} = 0.5 + \text{atan2}\!\!\left(
\begin{aligned}
& \text{-sin(saa)cos(sea),} \\
& \text{sin(sea)cos(j) } - \\
& \text{cos(saa)cos(sea)sin(j)}
\end{aligned}
\right)
\tag{35}$$

$$\text{ast} =
\begin{cases}
\text{saa} & \text{j} = 0.25 \\
\text{atan2(-sin(saa)cos(sea), sin(sea))} & \text{j} = 0 \\
(1.5 - \text{saa}) \mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}} 1 & \text{j} = -0.25
\end{cases}
\tag{36}$$

At the North Pole ([j](#j) = 0.25), the latitude is 0.25 [j](#j) and [Equation 35](#eq-astjing) simplifies to [ast](#ast) = [saa](#saa). At the South Pole ([j](#j) = -0.25), the latitude is -0.25 [j](#j) and [Equation 35](#eq-astjing) simplifies to [ast](#ast) = 0.5 − [saa](#saa) before solar noon or [ast](#ast) = 1.5 − [saa](#saa) after solar noon. In between the Equator and the South or North Pole (-0.25 \< [j](#j) \< 0 ∨ 0 \< [j](#j) \< 0.25), we should use Equation [20](#eq-ast), [35](#eq-astjing), or [37](#eq-astsha).

$$\text{ast} = 0.5 + \text{arccos}\!\!\left(\dfrac{\text{sin(sea)} - \text{sin(j)sin(sda)}}{\text{cos(j)cos(sda)}}\right) \ast
\begin{cases}
\text{-}1 & 0 \le \text{saa} < 0.5 \\
1 & 0.5 \le \text{saa} < 1
\end{cases}
\tag{37}$$

#### 17 Solar declination angle

Unlike [Equation 35](#eq-astjing), [Equation 37](#eq-astsha) requires a “solar declination angle” ([sda](#sda)). Whereas latitude is the angle from the Equator in the [geographic coordinate system](https://en.wikipedia.org/wiki/Geographic_coordinate_system#:~:text=a%20spherical%20or%20geodetic%20coordinate%20system%20for%20measuring%20and%20communicating%20positions%20directly%20on%20Earth%20as%20latitude%20and%20longitude), [declination](https://en.wikipedia.org/wiki/Declination#:~:text=the%20angular%20distance%20from%20the%20celestial%20equator%20on%20the%20celestial%20sphere) is the angle from the [celestial equator](https://en.wikipedia.org/wiki/Celestial_equator) in the [equatorial coordinate system](https://en.wikipedia.org/wiki/Equatorial_coordinate_system#:~:text=a%20celestial%20coordinate%20system%20widely%20used%20to%20specify%20the%20positions%20of%20celestial%20objects). For simplicity, we can use [Equation 23](#eq-eot) for both the [eot](#eot) and [sda](#sda). The line plot below shows [sda](#sda) over the course of a year.

In the line plot above, [zero crossings](https://en.wikipedia.org/wiki/Zero_crossing#:~:text=a%20point%20where%20the%20sign%20of%20a%20mathematical%20function%20changes) are [equinoxes](https://en.wikipedia.org/wiki/Equinox#:~:text=a%20moment%20in%20time%20when%20the%20Sun%20appears%20directly%20above%20the%20equator%2C%20rather%20than%20to%20its%20north%20or%20south) and [stationary points](https://en.wikipedia.org/wiki/Stationary_point#:~:text=a%20point%20on%20the%20graph%20of%20the%20function%20where%20the%20function%27s%20derivative%20is%20zero) are [solstices](https://en.wikipedia.org/wiki/Solstice#:~:text=the%20time%20when%20the%20Sun%20reaches%20its%20most%20northerly%20or%20southerly%20sun%20path%20relative%20to%20the%20celestial%20equator%20on%20the%20celestial%20sphere). From the northward to the southward equinox, the [sda](#sda) is positive and every [law](#law) in the Northern Hemisphere is longer than the [law](#law) at the Equator, which is longer than every [law](#law) in the Southern Hemisphere. The opposite is true from the southward to the northward equinox.

The chart below splits the [Socioeconomic Data and Applications Center](https://www.earthdata.nasa.gov/centers/sedac-daac) population data into two bars representing the Northern and Southern Hemispheres and then further divides each bar by [UTC](#utc) offset. Nearly 7 billion out of a total of almost 8 billion people live in the Northern Hemisphere and therefore experience the longest [law](#law) of the year at the [northern solstice](https://en.wikipedia.org/wiki/June_solstice#:~:text=In%20the%20Northern%20Hemisphere%2C%20the%20June%20solstice%20is%20the%20summer%20solstice%20%28the%20day%20with%20the%20longest%20period%20of%20daylight%29%2C%20while%20in%20the%20Southern%20Hemisphere%20it%20is%20the%20winter%20solstice%20%28the%20day%20with%20the%20shortest%20period%20of%20daylight%29).

The top range input below picks the [doy](#doy) that we will turn into a [toy](#toy) and then pass to our [sda](#sda) model. The two range inputs beneath the [doy](#doy) input choose the geographic coordinates needed to find the sunrise and sunset [tod](#tod). While the sunrise and sunset [tod](#tod) rely on all three range inputs, the [law](#law) depends on the [doy](#doy) and latitude but not on longitude: − = .

$$\text{sunset} - \text{sunrise} = \text{law} \tag{38}$$

#### 18 Solar declination angle

In the equation above, the sunset [tod](#tod) is the [minuend](https://en.wiktionary.org/wiki/minuend#:~:text=A%20number%20or%20quantity%20from%20which%20another%20is%20to%20be%20subtracted), the sunrise [tod](#tod) is the [subtrahend](https://en.wikipedia.org/wiki/Subtraction#:~:text=number%20being%20subtracted), and the [law](#law) is the [difference](https://en.wikipedia.org/wiki/Subtraction#Notation_and_terminology:~:text=The%20result%20is%20the%20difference): sunset − sunrise = [law](#law). If we replace the sunset [tod](#tod) with the current [tod](#tod) and the sunrise [tod](#tod) with the sunset [tod](#tod), the difference will no longer be the [law](#law) but rather the time until sunset if it is negative or since sunset if it is positive: = .

In general, the subtrahend is the time of an event such as a rocket🚀launch and the difference is the negative [remaining time](https://en.wikipedia.org/wiki/Countdown#:~:text=the%20time%20remaining%20before%20an%20event) if the minuend is less than the subtrahend or the positive [elapsed time](https://en.wikipedia.org/wiki/Mission_Elapsed_Time) if the minuend is greater than the subtrahend. When the minuend is the current time, the difference acts as a “[T minus (T−) countdown](https://en.wikipedia.org/wiki/Countdown#:~:text=a%20sequence%20of%20backward%20counting%20to%20indicate%20the%20time%20remaining)” or “[T plus (T+) countup](https://en.wikipedia.org/wiki/Countdown#:~:text=After%20a%20launch%2C%20most%20countdown%20clocks%20begin%20to%20show%20Mission%20Elapsed%20Time)”.

$$\begin{cases}\text{difference}<0&{\text{if } \text{minuend} < \text{subtrahend};}\\\text{difference}=0&{\text{if minuend} = \text{subtrahend};}\\\text{difference}>0&{\text{if minuend}>\text{subtrahend.}}\end{cases} \tag{39}$$

#### 19 Positive interval tod (pit)

A [tod](#tod) can be either a “positive interval [tod](#tod)” ([pit](#pit)) that counts up the time since the “beginning of day” ([bod](#bod)) or a “negative interval [tod](#tod)” ([nit](#nit)) that counts down the time until the “end of day” ([eod](#eod)). The difference between a [pit](#pit) and an [eod](#eod) is a [nit](#nit): [pit](#pit) − [eod](#eod) = [nit](#nit). The [eod](#eod) is equal to one day or 10⁵ [cmd](#cmd). In [cmd](#cmd), the current Zone 0 [nit](#nit) is − 10⁵ = .

#### 20 Positive interval doy (pid)

Similarly, a [doy](#doy) can be either a “positive integer [doy](#doy)” ([pid](#pid)) that counts up the days since the “beginning of year” ([boy](#boy)) or a “negative integer [doy](#doy)” ([nid](#nid)) that counts down the days until the “end of year” ([eoy](#eoy)) and an [ada](#ada) can be either a “positive interval [ada](#ada)” ([pia](#pia)) that joins a [pid](#pid) and [pit](#pit) or a “negative interval [ada](#ada)” ([nia](#nia)) that links a [nid](#nid) and [nit](#nit): [nia](#nia) = [nid](#nid) + [nit](#nit) = [pia](#pia) − [eoy](#eoy).

When a [doy](#doy) and a [tod](#tod) are in the same equation, we multiple the [tod](#tod) by a conversion factor or divide it by an inverse conversion factor so that its measurement unit matches that of the [doy](#doy): =  + ÷ 10⁵ =  + ÷ 10⁵. If the subtrahend is an [eod](#eod), it disappears after advancing the [doy](#doy) by one day and turning the [tod](#tod) from a [pit](#pit) into a [nit](#nit).

#### 21 Year of era (yoe)

Likewise, a subtrahend that is an [eoy](#eoy) is not displayed as part of a [doy](#doy) or an [ada](#ada) because it becomes incorporated into the “year of era” ([yoe](#yoe)):  + ÷ =  + ÷ . Essentially, the [doy](#doy) takes up any amount of time that spills over from the [tod](#tod) and the [yoe](#yoe) absorbs any amount of time that does not fit into the [doy](#doy).

The [ada](#ada) is like a [sōzu](https://en.wikipedia.org/wiki/Shishi-odoshi#:~:text=a%20type%20of%20water%20fountain%20used%20in%20Japanese%20gardens) that fills until it reaches a tipping point, empties out, and then begins to fill up again. In this analogy, time flows like water from the [ada](#ada) to the [yoe](#yoe), the [eoy](#eoy) is the maximum volume of the sōzu, the [pia](#pia) is the volume of water in the sōzu, and the [nia](#nia) is the volume of the empty space inside the sōzu.

![](../../asset/Higashiyama_Botanical_Garden_Shishiodoshi_20170617.gif)[Wikimedia](https://commons.wikimedia.org/wiki/File:Higashiyama_Botanical_Garden_Shishiodoshi_20170617.gif)

#### 22 Time of milliday (tom)

Just as we can divide an [ada](#ada) into a [doy](#doy) and [tod](#tod), we can split a [tod](#tod) into a “milliday of day” ([mod](#mod)) and a “time of milliday” ([tom](#tom)): [tod](#tod) = [mod](#mod) × 100 + [tom](#tom). Multiplying a [mod](#mod) by 100 converts it from [md](#md) to [cmd](#cmd). To distinguish the [tom](#tom) from the mod, we can express the first digit of the [tom](#tom) in [b9](#b9) rather than [b10](#b10): = × 100 + ≈ = × 100 + .

#### 23 Simulated watch face

The range input below sets the [tzo](#tzo) for the watch [face](https://en.wikipedia.org/wiki/Clock_face#:~:text=displays%20time%20through%20the%20use%20of%20a%20flat%20dial%20with%20reference%20marks) simulation beneath it. The radio inputs in between the range input and simulation determine whether the simulated watch face is circular or rectangular and whether it has 90 [s](#s) or 100 [cmd](#cmd) [marks](https://en.wikipedia.org/wiki/Hatch_mark#Unit_and_value_marks:~:text=The%20distance%20between%20adjacent%20marks%20is%20one%20unit). An [md](#md) divides evenly into thirds, sixths, or ninths with [s](#s), quarters with [cmd](#cmd), and halves, fifths, or tenths with either unit.

The “Ticks” radio input above refers to the tick marks on the simulated watch face above and how many times the simulated watch ticks per [md](#md) ([‰](#permil)). I used the [`librosa` Python library](https://librosa.org) to determine that the [tempo](https://en.wikipedia.org/wiki/Tempo#:~:text=pace%20of%20a%20given%20composition) of the 1988 song “[Don’t Worry, Be Happy](https://en.wikipedia.org/wiki/Don%27t_Worry,_Be_Happy#:~:text=a%201988%20song%20by%20Bobby%20McFerrin)” is ~100.566 [‰](#permil) or ~1.00566 per [cmd](#md) ([þ](#per)). Whereas [‰](#permil) and [þ](#per) measure [rates](https://en.wikipedia.org/wiki/Rate_%28mathematics%29#:~:text=the%20denominator%20is%20a%20time%20duration), [md](#md) and [cmd](#md) measure [durations](https://en.wikipedia.org/wiki/Duration#:~:text=amount%20of%20time%20elapsed%20between%20two%20events).

The difference in between a minuend and subtrahend is intended to be a duration, whereas the minuend and subtrahend themselves are supposed to be [tod](#tod) that represent [time points](https://en.wikipedia.org/wiki/Time_point#:~:text=an%20instant%2C%20analogous%20to%20a%20geometrical%20point%20in%20space). If the minuend is the current [tod](#tod) and the subtrahend is the [tod](#tod) when this webpage loaded, the difference will be the duration since this webpage loaded: =  + .

#### Next

The next article in the [Dec section](../../dec) of my [site](../..) shows how we can combine [Dec dates](../../dec/date) and times into [Dec snaps](../../dec/snap)🫰, which are analogous to the [combined date and time representations](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data) international standard for dates and times. The final article in the Dec section demonstrates how Dec dates, times, and snaps🫰can be paired up to express [time intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points) called Dec [spans](../../dec/span)🌈.

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODI5LjY4NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJmbG93Y2hhcnQgZGVjbmF2LXN2ZyIgdmlld2JveD0iMCAwIDgyOS42ODc1IDk0IiByb2xlPSJncmFwaGljcy1kb2N1bWVudCBkb2N1bWVudCIgYXJpYS1yb2xlZGVzY3JpcHRpb249ImZsb3djaGFydC12MiIgaGVpZ2h0PSI5NCI+CjxnPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjUiIHJlZnk9IjUiIG1hcmtlcnVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFya2Vyd2lkdGg9IjgiIG1hcmtlcmhlaWdodD0iOCIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNIDAgMCBMIDEwIDUgTCAwIDEwIHoiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiAvPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRTdGFydCIgY2xhc3M9Im1hcmtlciBmbG93Y2hhcnQtdjIiIHZpZXdib3g9IjAgMCAxMCAxMCIgcmVmeD0iNC41IiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSI4IiBtYXJrZXJoZWlnaHQ9IjgiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTSAwIDUgTCAxMCAxMCBMIDEwIDAgeiIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIC8+PC9tYXJrZXI+PG1hcmtlciBpZD0ibWVybWFpZC0xNzg5Nzk1ODg3NTk3X2Zsb3djaGFydC12Mi1jaXJjbGVFbmQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjExIiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSIxMSIgbWFya2VyaGVpZ2h0PSIxMSIgb3JpZW50PSJhdXRvIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiPjwvY2lyY2xlPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY2lyY2xlU3RhcnQiIGNsYXNzPSJtYXJrZXIgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9Ii0xIiByZWZ5PSI1IiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiIG1hcmtlcndpZHRoPSIxMSIgbWFya2VyaGVpZ2h0PSIxMSIgb3JpZW50PSJhdXRvIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiPjwvY2lyY2xlPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY3Jvc3NFbmQiIGNsYXNzPSJtYXJrZXIgY3Jvc3MgZmxvd2NoYXJ0LXYyIiB2aWV3Ym94PSIwIDAgMTEgMTEiIHJlZng9IjEyIiByZWZ5PSI1LjIiIG1hcmtlcnVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFya2Vyd2lkdGg9IjExIiBtYXJrZXJoZWlnaHQ9IjExIiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiAvPjwvbWFya2VyPjxtYXJrZXIgaWQ9Im1lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItY3Jvc3NTdGFydCIgY2xhc3M9Im1hcmtlciBjcm9zcyBmbG93Y2hhcnQtdjIiIHZpZXdib3g9IjAgMCAxMSAxMSIgcmVmeD0iLTEiIHJlZnk9IjUuMiIgbWFya2VydW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXJrZXJ3aWR0aD0iMTEiIG1hcmtlcmhlaWdodD0iMTEiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTSAxLDEgbCA5LDkgTSAxMCwxIGwgLTksOSIgY2xhc3M9ImFycm93TWFya2VyUGF0aCIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIC8+PC9tYXJrZXI+PGcgY2xhc3M9InJvb3QiPjxnIGNsYXNzPSJjbHVzdGVycyI+PC9nPjxnIGNsYXNzPSJlZGdlUGF0aHMiPjxwYXRoIGQ9Ik0xMjAuOTIyLDQ3TDEyNS4wODksNDdDMTI5LjI1NSw0NywxMzcuNTg5LDQ3LDE0NS4yNTUsNDdDMTUyLjkyMiw0NywxNTkuOTIyLDQ3LDE2My40MjIsNDdMMTY2LjkyMiw0NyIgaWQ9IkxfQV9CXzAiIGNsYXNzPSJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGVkZ2UtdGhpY2tuZXNzLW5vcm1hbCBlZGdlLXBhdHRlcm4tc29saWQgZmxvd2NoYXJ0LWxpbmsiIHN0eWxlPSI7IiBkYXRhLWVkZ2U9InRydWUiIGRhdGEtZXQ9ImVkZ2UiIGRhdGEtaWQ9IkxfQV9CXzAiIGRhdGEtcG9pbnRzPSJXM3NpZUNJNk1USXdMamt5TVRnM05Td2llU0k2TkRkOUxIc2llQ0k2TVRRMUxqa3lNVGczTlN3aWVTSTZORGQ5TEhzaWVDSTZNVGN3TGpreU1UZzNOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjxwYXRoIGQ9Ik0yOTUuNzAzLDQ3TDI5OS44Nyw0N0MzMDQuMDM2LDQ3LDMxMi4zNyw0NywzMjAuMDM2LDQ3QzMyNy43MDMsNDcsMzM0LjcwMyw0NywzMzguMjAzLDQ3TDM0MS43MDMsNDciIGlkPSJMX0JfQ18wIiBjbGFzcz0iZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIiBzdHlsZT0iOyIgZGF0YS1lZGdlPSJ0cnVlIiBkYXRhLWV0PSJlZGdlIiBkYXRhLWlkPSJMX0JfQ18wIiBkYXRhLXBvaW50cz0iVzNzaWVDSTZNamsxTGpjd016RXlOU3dpZVNJNk5EZDlMSHNpZUNJNk16SXdMamN3TXpFeU5Td2llU0k2TkRkOUxIc2llQ0k2TXpRMUxqY3dNekV5TlN3aWVTSTZORGQ5WFE9PSIgbWFya2VyLWVuZD0idXJsKCNtZXJtYWlkLTE3ODk3OTU4ODc1OTdfZmxvd2NoYXJ0LXYyLXBvaW50RW5kKSIgLz48cGF0aCBkPSJNNDcxLjUzMSw0N0w0NzUuNjk4LDQ3QzQ3OS44NjUsNDcsNDg4LjE5OCw0Nyw0OTUuODY1LDQ3QzUwMy41MzEsNDcsNTEwLjUzMSw0Nyw1MTQuMDMxLDQ3TDUxNy41MzEsNDciIGlkPSJMX0NfRF8wIiBjbGFzcz0iZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIiBzdHlsZT0iOyIgZGF0YS1lZGdlPSJ0cnVlIiBkYXRhLWV0PSJlZGdlIiBkYXRhLWlkPSJMX0NfRF8wIiBkYXRhLXBvaW50cz0iVzNzaWVDSTZORGN4TGpVek1USTFMQ0o1SWpvME4zMHNleUo0SWpvME9UWXVOVE14TWpVc0lua2lPalEzZlN4N0luZ2lPalV5TVM0MU16RXlOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjxwYXRoIGQ9Ik02NDYuNjA5LDQ3TDY1MC43NzYsNDdDNjU0Ljk0Myw0Nyw2NjMuMjc2LDQ3LDY3MC45NDMsNDdDNjc4LjYwOSw0Nyw2ODUuNjA5LDQ3LDY4OS4xMDksNDdMNjkyLjYwOSw0NyIgaWQ9IkxfRF9FXzAiIGNsYXNzPSJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGVkZ2UtdGhpY2tuZXNzLW5vcm1hbCBlZGdlLXBhdHRlcm4tc29saWQgZmxvd2NoYXJ0LWxpbmsiIHN0eWxlPSI7IiBkYXRhLWVkZ2U9InRydWUiIGRhdGEtZXQ9ImVkZ2UiIGRhdGEtaWQ9IkxfRF9FXzAiIGRhdGEtcG9pbnRzPSJXM3NpZUNJNk5qUTJMall3T1RNM05Td2llU0k2TkRkOUxIc2llQ0k2TmpjeExqWXdPVE0zTlN3aWVTSTZORGQ5TEhzaWVDSTZOamsyTGpZd09UTTNOU3dpZVNJNk5EZDlYUT09IiBtYXJrZXItZW5kPSJ1cmwoI21lcm1haWQtMTc4OTc5NTg4NzU5N19mbG93Y2hhcnQtdjItcG9pbnRFbmQpIiAvPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVscyI+PGcgY2xhc3M9ImVkZ2VMYWJlbCI+PGcgY2xhc3M9ImxhYmVsIiBkYXRhLWlkPSJMX0FfQl8wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiBjbGFzcz0ibGFiZWxCa2ciIGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHA+PHNwYW4gY2xhc3M9ImVkZ2VMYWJlbCI+PC9zcGFuPjwvcD4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjxnIGNsYXNzPSJlZGdlTGFiZWwiPjxnIGNsYXNzPSJsYWJlbCIgZGF0YS1pZD0iTF9CX0NfMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxmb3JlaWdub2JqZWN0IHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjxkaXYgY2xhc3M9ImxhYmVsQmtnIiBkYXRhLXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogdGFibGUtY2VsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgbGluZS1oZWlnaHQ6IDEuNTsgbWF4LXdpZHRoOiAyMDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CjxwPjxzcGFuIGNsYXNzPSJlZGdlTGFiZWwiPjwvc3Bhbj48L3A+CjwvZGl2Pgo8L2ZvcmVpZ25vYmplY3Q+PC9nPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVsIj48ZyBjbGFzcz0ibGFiZWwiIGRhdGEtaWQ9IkxfQ19EXzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj48Zm9yZWlnbm9iamVjdCB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48ZGl2IGNsYXNzPSJsYWJlbEJrZyIgZGF0YS14bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxpbmUtaGVpZ2h0OiAxLjU7IG1heC13aWR0aDogMjAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPgo8cD48c3BhbiBjbGFzcz0iZWRnZUxhYmVsIj48L3NwYW4+PC9wPgo8L2Rpdj4KPC9mb3JlaWdub2JqZWN0PjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbCI+PGcgY2xhc3M9ImxhYmVsIiBkYXRhLWlkPSJMX0RfRV8wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiBjbGFzcz0ibGFiZWxCa2ciIGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHA+PHNwYW4gY2xhc3M9ImVkZ2VMYWJlbCI+PC9zcGFuPjwvcD4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvZz48ZyBjbGFzcz0ibm9kZXMiPjxhIGhyZWY9Ii4uLy4uL2RlYyIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUEtMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuNDYwOTM3NSwgNDcpIj48cmVjdCBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIiBzdHlsZSB4PSItNTYuNDYwOTM3NSIgeT0iLTM5IiB3aWR0aD0iMTEyLjkyMTg3NSIgaGVpZ2h0PSI3OCIgLz48ZyBjbGFzcz0ibGFiZWwiIHN0eWxlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi40NjA5Mzc1LCAtMjQpIj48cmVjdCAvPjxmb3JlaWdub2JqZWN0IHdpZHRoPSI1Mi45MjE4NzUiIGhlaWdodD0iNDgiPjxkaXYgZGF0YS14bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxpbmUtaGVpZ2h0OiAxLjU7IG1heC13aWR0aDogMjAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPgo8c3BhbiBjbGFzcz0ibm9kZUxhYmVsIj4KPHA+CkRlYwo8L3A+CjxwPjwvcD48L3NwYW4+CjwvZGl2Pgo8L2ZvcmVpZ25vYmplY3Q+PC9nPjwvZz48L2E+PGEgaHJlZj0iLi4vLi4vZGVjL2RhdGUiIGNsYXNzPSJkZWNuYXYtbGluayBuby1leHRlcm5hbCI+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1CLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMy4zMTI1LCA0NykiPjxyZWN0IGNsYXNzPSJiYXNpYyBsYWJlbC1jb250YWluZXIiIHN0eWxlIHg9Ii02Mi4zOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNC43ODEyNSIgaGVpZ2h0PSI3OCIgLz48ZyBjbGFzcz0ibGFiZWwiIHN0eWxlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi4zOTA2MjUsIC0yNCkiPjxyZWN0IC8+PGZvcmVpZ25vYmplY3Qgd2lkdGg9IjY0Ljc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpkYXRlCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvdGltZSIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDA4LjYxNzE4NzUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjkxNDA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS44MjgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTE0MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuODI4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgp0aW1lCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvc25hcCIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUQtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTg0LjA3MDMxMjUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjUzOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS4wNzgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuNTM5MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuMDc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpzbmFwCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48YSBocmVmPSIuLi8uLi9kZWMvc3BhbiIgY2xhc3M9ImRlY25hdi1saW5rIG5vLWV4dGVybmFsIj48ZyBjbGFzcz0ibm9kZSBkZWZhdWx0IiBpZD0iZmxvd2NoYXJ0LUUtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzU5LjE0ODQzNzUsIDQ3KSI+PHJlY3QgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIgc3R5bGUgeD0iLTYyLjUzOTA2MjUiIHk9Ii0zOSIgd2lkdGg9IjEyNS4wNzgxMjUiIGhlaWdodD0iNzgiIC8+PGcgY2xhc3M9ImxhYmVsIiBzdHlsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuNTM5MDYyNSwgLTI0KSI+PHJlY3QgLz48Zm9yZWlnbm9iamVjdCB3aWR0aD0iNjUuMDc4MTI1IiBoZWlnaHQ9IjQ4Ij48ZGl2IGRhdGEteG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsaW5lLWhlaWdodDogMS41OyBtYXgtd2lkdGg6IDIwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KPHNwYW4gY2xhc3M9Im5vZGVMYWJlbCI+CjxwPgpzcGFuCjwvcD4KPHA+PC9wPjwvc3Bhbj4KPC9kaXY+CjwvZm9yZWlnbm9iamVjdD48L2c+PC9nPjwvYT48L2c+PC9nPjwvZz48L3N2Zz4=)

Please spread the good word about Dec using the citation information at the bottom of this article. You may also want to cite the Observable notebooks that I adapted into the clock🕓, bar📊chart, map🗺️, and daylight☀️plot visualizations in this article or the 2014 blog post which proposed a system of 20 decimal time zones, each 5 [cd](#cd) wide, based on the [Greenwich Meridian](https://en.wikipedia.org/wiki/Prime_meridian_(Greenwich)#:~:text=a%20geographical%20reference%20line%20that%20passes%20through%20the%20Royal%20Observatory%2C%20Greenwich%2C%20in%20London%2C%20England):

- [Pearson, Tom](https://www.2x2.graphics). *2013**+124*. “Simple D3 clock.” +. <https://observablehq.com/@d3/simple-clock>.
- [Heyen, Frank](https://fheyen.github.io). *2021**+246*. “BarChart Clock.” +. <https://observablehq.com/@fheyen/barchart-clock>.
- [Johnson, Ian](https://enjalot.github.io). *2021**+090*. “Draggable World Map Coordinates Input.” +. <https://observablehq.com/@enjalot/draggable-world-map-coordinates-input>.
- [Bridges, Dan](https://www.danbridges.org). *2021**+311*. “Visualizing Seasonal Daylight.” +. <https://observablehq.com/@dbridges/visualizing-seasonal-daylight>.
- [Clements, John](https://www.brinckerhoff.org). *2014**+091*, “Decimal Time Zones.” +. <https://www.brinckerhoff.org/blog/2014/05/31/decimal-time-zones>.

#### Cite

Of the [bibliography file](https://quarto.org/docs/authoring/citations#bibliography-files) [formats](https://pandoc.org/MANUAL.html#specifying-bibliographic-data) supported by [Quarto](https://quarto.org), I recommend [yaml](https://en.wikipedia.org/wiki/YAML#:~:text=a%20human%2Dreadable%20data%20serialization%20language). The yaml bibliography file shown below contains [bibliographic records](https://en.wikipedia.org/wiki/Bibliographic_record#:~:text=contains%20the%20data%20elements%20necessary%20to%20help%20users%20identify%20and%20retrieve%20that%20resource) ([metadata](https://en.wikipedia.org/wiki/Metadata#:~:text=the%20title%2C%20author%2C%20and%20publication%20date%20of%20a%20book%20are%20metadata%20about%20the%20book)) about the article you are currently reading and the article entitled [`chrono`-Compatible Low-Level Date Algorithms](https://howardhinnant.github.io/date_algorithms) in which [Howard Hinnant](https://howardhinnant.github.io) ([2021+185](#ref-hinnant2021date)) describes the algorithms underlying Dec dates.

``` yml
references:
- id: hinnant2021date
  author:
    - family: Hinnant
      given: Howard
  title: [<code>chrono</code>]{.nocase}-Compatible Low-Level Date Algorithms
  url: https://howardhinnant.github.io/date_algorithms
  issued:
    literal: 2021+185
- id: laptev2026time
  author:
    - family: Laptev
      given: Martin
  title: Declock
  url: https://maptv.github.io/dec/time
  issued:
    literal: 2026+242
```

Quarto configuration files, such as `_quarto.yml` and `_metadata.yml`, are written in yaml. Quarto input files, including Quarto markdown, [Jupyter](https://jupyter.org) notebook, [markdown](https://quarto.org/docs/authoring/markdown-basics), and specially formatted [script files](https://quarto.org/docs/computations/render-scripts), can start with a [yaml header](https://quarto.org/docs/authoring/front-matter.html). Therefore, we could put the metadata above directly into a Quarto configuration or input file rather than into a bibliography file.

As an alternative to yaml, I suggest the [BibTeX](https://en.wikipedia.org/wiki/BibTeX#:~:text=a%20bibliographic%20flat%2Dfile%20database%20file%20format) format. The BibTeX bibliography file below can be used by Quarto equally as well as the yaml bibliography file above. Regardless of the bibliography file format we choose, Quarto configuration and input files require that we store the [path](https://en.wikipedia.org/wiki/Path_(computing)#:~:text=a%20string%20that%20uniquely%20identifies%20an%20item%20in%20a%20hierarchical%20file%20system) to our bibliography file, or our list of bibliography file paths, in yaml format.

``` bib
@misc{hinnant2021date,
  author = "Howard Hinnant",
  title = "\texttt{chrono}-Compatible Low-Level Date Algorithms",
  url = "https://howardhinnant.github.io/date_algorithms",
  year = 2021+185
}
@misc{laptev2026time,
  author = "Martin Laptev",
  title = "Declock",
  url = "https://maptv.github.io/dec/time",
  year = 2026+242
}
```

In addition to storing metadata in a bibliography file, we can keep instructions regarding how to style citations and references in a [Citation Style Language](https://quarto.org/docs/authoring/citations#sec-citations-style) (csl) file. If we do not provide a csl file, Quarto will follow the [Chicago Manual of Style](https://chicagomanualofstyle.org) when processing parenthetical citations: ([Hinnant 2021+185](#ref-hinnant2021date)), narrative citations: ([2021+185](#ref-hinnant2021date)), and references:

[Hinnant, Howard](https://howardhinnant.github.io). 2021+185. *`chrono`-Compatible Low-Level Date Algorithms*. <https://howardhinnant.github.io/date_algorithms.html>.

When provided with [`nature.csl`](https://github.com/citation-style-language/styles/blob/master/nature.csl), [`american-medical-association.csl`](https://github.com/citation-style-language/styles/blob/master/american-medical-association.csl), or a similar csl file, Quarto will produce superscript numeric citations, which look just like Quarto [footnotes](https://quarto.org/docs/authoring/markdown-basics#footnotes): [^1]. Unlike Quarto citations, Quarto footnotes do not require any additional files or configuration. A Quarto output file can have both a [Footnotes](#footnotes) and [References](#refs) section.

#### Glossary

- [a](#arcbeat): arcbeat, a hundred thousandth of a circle, 0.0036 degrees, 0.216 arcminutes, 12.96 arcseconds
  - [ma](#milliarcbeats): milliarcbeat, a thousandth of an arcbeat, a hundred millionth of a circle, 12.96 milliarcseconds
- [b](#beat): beat, centimilliday, a hundred thousandth of a day, 864 milliseconds
  - [mb](#millibeat): millibeat, centimicroday, a thousandth of a beat, a hundred millionth of a day, 864 microseconds
- [bpc](#beatpercentiday): a musical or heart beat per centiday, a tenth of a beat per milliday, 0.069♂ beats per minute, 100 beats per day
- [bpm](#beatpermilliday): a musical or heart beat per milliday, ten beats per centiday, 0.69♂ beats per minute, 1000 beats per day
- [BMI](#bodymassindex): body mass index, kilograins of body mass divided by height in zem squared (kg/z²)
- [b9](#base9): base9, nonary, 9 digits written as the astronomical symbols of the Sun and the eight planets, ☉ ☿ ♀ ♁ ♂ ♃ ♄ ♅ ♆; the first digit after a tod with Dec seconds appended counts tens of Dec seconds
- [b10](#base10): base10, decimal, the digits 0 to 9
- [b24](#base24): base24, 24 digits written as the lowercase Greek letters α to ω; counts sid after a number of Dec seconds or hours after a UTC offset
- [c](#taur): taur, 𝜏*r*, 100000 kilozem, 40000 kilometers, nearly the circumference of the Earth, roughly the product of 𝜏 and the radius of the Earth, approximately the dividend of the surface area and the diameter of the Earth
  - [gc](#gigataur): gigataur, a billion taur
  - [kc](#kilotaur): kilotaur, a thousand taur, 10⁸ kilozem
  - [mc](#millitaur): millitaur, *m*𝜏*r*, a thousandth of a taur, 100 kilozem, 40 kilometers
  - [µc](#microtaur): microtaur, *µ*𝜏*r*, a millionth of a taur, 100 zem, 40 meters
  - [nc](#nanotaur): nanotaur, *n*𝜏*r*, a billionth of a taur, 100 millizem, 1 decizem, 4 centimeters
  - [nc³](#cubicnanotaur): cubic nanotaur, *n*𝜏*r*³, 1 cubic decizem
- [d](#day): day, a tenth of a decaday, a seventh of a week, a fifth of a pentaday, 10 decidays, 24 hours, 100 centidays, 1000 millidays, 1440 minutes, 86400 seconds, 100000 beats, the inverse of a quotidie
  - [dox](#dayofxun): day of xún
  - [dop](#dayofpentaday): day of pentaday
  - [dom](#dayofmonth): day of month
  - dom_(♀): Decyther day of month, 0 to 28 in Venusian short months or 0 to 29 in Venusian long months
  - [dow](#dayofweek): day of week
  - [doy](#dayofyear): day of year, xún \* 10 + dox
  - [pid](#positiveintegerdoy): positive integer day of year, days elapsed since the beginning of the year, 0 to 364 or 365
  - [nid](#negativeintegerdoy): negative integer day of year, pid − syl, -365 or -366 to -1, the negative of the days left in the year
  - [mid](#mixedintegerdoy): mixed integer day of year, an nid rewritten with negative leading digits (marked by a vinculum) and a positive last digit or two
  - [doe](#dayofera): day of era, days since the Dec epoch
  - [eda](#epochaldayaggregate): epochal day aggregate, doe + tod, days since the Dec epoch including the time of day
  - [edd](#edadifferencedifference): eda difference difference, an eda minus a difference, used to recover the year and ada of a past event
  - [ada](#annualdayaggregate): annual day aggregate, doy + tod
  - [pia](#positiveintervalada): positive interval ada, the time since the start of the current year, equal to the ada
  - [nia](#negativeintervalada): negative interval ada, pia − syl, the negative of the time until the start of the next year
  - [doq](#dayofquadricentennial): day of quadricentennial, days since the start of the current Gregorian quadricentennial, 0 to 146096
  - [doh_(♀)](#dayofhexadecimester): Decyther day of hexadecimester, days since the start of the current 467-day Decyther hexadecimester, doe −⌊ 467, 0 to 466
  - [doh](#dayofhectoday): day of hectoday, doy −⌊ 100, the percent of a hectoday that has elapsed
  - [dob](#dayofbimester): day of bimester, 0 to 58 in common bimesters or 0 to 59 in leap bimesters
  - dob_(♀): Decyther day of bimester, 0 to 57 in antes and the post of Qoh 2 or 0 to 58 in the other posts
  - [dot](#dayoftricennium): day of tricennium, days since the start of the current 30-year lunar cycle, 0 to 10630
  - [doq_(♀)](#dayofquadrimester): Decyther day of quadrimester, days since the beginning of a Decyther quadrimester, 0 to 115 or 116
  - [boq](#beginningofquadrimester): beginning of quadrimester, the pid of Doq_(♀) 0, pid − doq_(♀)
  - [qoh](#quadrimesterofhexadecimester): quadrimester of hexadecimester, zero-based index of a Decyther quadrimester, 0 to 3
  - [bob](#beginningofbimester): beginning of bimester, the pid of Dob 0, pid − dob
  - [bom](#beginningofmonth): beginning of month, the pid of the day before the first day of the month, pid − dom
  - [moh_(♀)](#monthofhexadecimester): Decyther month of hexadecimester, zero-based index of a Venusian month, 0 to 15
  - [bow](#beginningofweek): beginning of week, the pid of Dow 0, pid − dow
  - [boy](#beginningofyear): beginning of year, midnight at the start of Day 0
  - [boe](#beginningofera): beginning of era, midnight at the start of Day 0 of Year 0
  - [boh](#beginningofhexadecimester): beginning of hexadecimester, the start of Doh_(♀) 0 and of the first ante in a Decyther hexadecimester
  - [eoy](#endofyear): end of year, midnight at the end of Day 364 or 365
  - [JDN](#Juliandaynumber): Julian day number, days since the start of the Julian period; increments at noon UTC
  - [lid](#lunarintercalationdifference): lunar intercalation difference, a lunar nid that only resets after lunar leap years, -1063 to -1
  - [ved](#venusianextracalationdifference): Venusian extracalation difference, days until the end of Doh_(♀) 349, the last day of the one-day-shorter Qoh 2, Bimester 5, and Moh_(♀) 11, (doh_(♀) + 117) −⌊ 467 − 467, -467 to -1
  - [mud](#misalignedunitdifference): misaligned unit difference, pid − dom − dow
  - [dd](#deciday): deciday, a tenth of a day, 2.4 hours, 144 minutes
  - [cd](#centiday): centiday, a hundredth of a day, 0.24 hours, 14.4 minutes
  - [md](#milliday): milliday, a thousandth of a day, 1.44 minutes
  - [dmd](#decimilliday): decimilliday, a ten thousandth of a day, 10 beats, 8640 milliseconds
  - [cmd](#centimilliday): centimilliday, a hundred thousandth of a day, 1 beat, 864 milliseconds
  - [µd](#microday): microday, a millionth of a day, 86.4 milliseconds
  - [nd](#nanoday): nanoday, a billionth of a day, 86.4 microseconds
- [°](#degree): degree, 1/360 turns, 180/𝜋 or 360/𝜏 radians
  - [c°](#compassdegree): compass degree
  - [h°](#huedegree): hue degree
- [e](#egg): egg, 1000 grains, 2 ounces, 64 grams
- [eot](#equationoftime): equation of time, ast − mst as a function of toy, about -9.8 to 11.4 millidays
- [ℓ](#cubit): ell, cubit, 10/9 zem
- [f](#foot): foot, 0.75 zem, 75 millimeters
- [g](#gutta): drop (gutta in Latin) or grain (granum in Latin), 64 microliters or 64 milligrams
  - [kg](#kilograin): kilograin or kilodrop, 64 grams or 64 milliliters
  - [Mg](#megagrain): megagrain or megadrop, 64 kilograms or 64 liters
- [h](#hectoday): a Dec season, 1 ***h***ectoday, 10 decadays, or one ***h***undred days
  - [pih](#positiveintegerhectoday): positive integer hectoday, ⌊pid ÷ 100⌋, 0 to 3
  - [nih](#negativeintegerhectoday): negative integer hectoday, ⌊nid ÷ 100⌋, -4 to -1
- [hex](#hexadecimal): hexadecimal, base 16
- [HSL](#huesaturationlightness): hue saturation lightness
- [HSV](#huesaturationvalue): hue saturation value
- [i](#inch): inch, a sixteenth of a zem, 25 millimeters
- [ISO](#internationalorganizationforstandardization): [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization), the body behind ISO 8601 dates such as 1970-01-01 (ISO month date) and 1970-W01-4 (ISO week date)
- [j](#jing): jīng (经), a full circle around the Earth moving North or South through both Poles, a measure of latitude; short for 经圈 (jīngquān), “meridian circle,” to emphasize a full circle rather than a meridian, which can be a half circle; an uppercase “J” without a serif is a vertical line drawn from top to bottom, like a jīng running from the North Pole to the South Pole, with a curve at the bottom where the jīng turns to come back up the other side of the Earth; although not the same as the jīng in Běijīng (北京) and Nánjīng (南京), jīng (经) is related to North (Běi) and South (Nán); on a loom, 经 is the warp, the threads that run lengthwise
  - [dj](#decijing): decijīng, a tenth of a jīng (经)
  - [mj](#millijing): millijīng, a thousandth of a jīng (经)
- [k](#keg): keg, cubic zem, 64 liters, 1000 wine glasses, a million drops, half a barrel
- [km](#kilometer): kilometer, 1000 meters, 2500 zem, 2.5 kilozem
- [kmph](#kilometersperhour): kilometers per hour, thousands of meters per hour, 1 kmph = 0.6 mv
- [L](#liter): liter, 15625 drops, a cubic decimeter
  - [mL](#milliliter): milliliter, a cubic centimeter, a thousandth of a liter, 15.625 drops
  - [µL](#microliter): microliter, a cubic millimeter, a millionth of a liter, 0.015625 drops
- [m²](#squaremeter): square meter, 6.25 square zem
  - [cm²](#squarecentimeter): square centimeter, 6.25 square centizem
  - [dm²](#squaredecimeter): square decimeter, 6.25 square decizem
  - [km²](#squarekilometer): square kilometer, 6.25 square kilozem
  - [cm³](#cubiccentimeter): cubic centimeter, 1 milliliter, a thousandth of a liter, 15.625 drops
- [p](#pentaday): pentaday, a group of five days, half a decaday
  - [pox](#pentadayofxun): pentaday of xún, 0 for Dox 0 to 4 and 1 for Dox 5 to 9
  - [pob](#pentadayofbimester): pentaday of bimester, ⌊dob ÷ 5⌋, 0 to 11
  - [pir](#pentadayinterquintilerange): pentaday interquintile range, Dop 1 to 3, the three days between two lim
  - [lim](#liminalinterconnectingmargin): liminal interconnecting margin, the pair of days between two pir, Dop 4 and the following Dop 0
- [n](#note): note, a specific frequency within an octave
- [NOAA](#nationaloceanicandatmosphericadministration): [National Oceanic and Atmospheric Administration](https://www.noaa.gov), source of the General Solar Position Calculations document
- [o](#octave): octave, a two fold change in frequency
  - [do](#decioctave): decioctave, a tenth of a two fold change in frequency
- [þ](#perbeat): perbeat, the inverse of a beat, 1/beat, once per beat, every beat, 100000 q; symbolized by thorn (þ), which looks like a combination of the letters “p” and “b”; not to be confused with a picobeat (pb)
  - [Tþ](#teraperbeat): teraperbeat, 10¹² perbeat, the inverse of a picobeat, 1/picobeat, once per picobeat, every picobeat
- [q](#quotidie): quotidie, the inverse of a day, a hundred thousandth of a perbeat; the letter “q” in quotidie can be flipped vertically to produce the letter “d” in day
- [r](#rose): compass rose, a full *r*otation along the horizon, 360 compass degrees
  - [saa](#solarazimuthangle): solar azimuth angle, the direction of the Sun along the horizon measured clockwise from North
  - [mr](#millirose): compass millirose, a thousandth of a *r*otation along the horizon, .36 compass degrees
- [rad](#radian): radian, 1/𝜏 turns, 360/𝜏 degrees, 1/𝜋 turns, 180/𝜋 degrees
- [RGB](#redgreenblue): red green blue
- [s](#second): second, 1/90 millidays, 10/9 beats, 1 Dec second = 0.96 SI seconds
  - [ds](#decisecond): decisecond, a tenth of a Dec second, 1/900 millidays, 1/9 beats, 96 milliseconds
  - [sid](#secondintervaldifference): second interval difference, 1 SI second − 1 Dec second, 1/24 Dec second, 1/25 SI second, 40 milliseconds
  - [sis](#sisecond): SI second, 25/24 Dec seconds, 1/86.4 millidays, 1/86400 days
- [soi](#spinorbitinterval): spin orbit interval, a lunar day, 1.03505 days
  - [soy](#soiofyear): soi of year
  - [sob](#soiofbimester): soi of bimester
- [SI](#internationalsystemofunits): [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement)
- [sol](#speedoflight): speed of light, 647.55170928 kiloomegar, 299792458 meters per second
- [sos](#speedofsound): speed of sound, 735.048 milliomegar, 340.3 meters per second
- [sda](#solardeclinationangle): solar declination angle, the latitude at which the Sun is directly overhead
- [sea](#solarelevationangle): solar elevation angle, the angle of the Sun above the horizon, negative when the Sun is below the horizon
- [𝜏](#tau): 2𝜋 or approximately 6.2831853
  - [𝜋](#taudividedby2): pi, 𝜏/2 or approximately 3.1415927
  - [ϡ](#taudividedby900): sampi, the Greek numeral for 900, 𝜏/900 or approximately 0.0069813 radians, 0.4 degrees
- [Tenet](#tenequaltemperament): ten equal temperament
  - [Xet](#10et): Tenet
  - [12et](#twelveequaltemperament): twelve equal temperament
- [tod](#timeofday): time of day
  - [pit](#positiveintervaltod): positive interval tod, the time since the start of the current day (previous midnight), equal to the tod
  - [nit](#negativeintervaltod): negative interval tod, pit − 1, the negative of the time until the start of the next day (next midnight)
  - [hms](#hourminutesecond): hour minute second, a tod written as an hod, moh, and som triplet
  - [dsa](#dailysecondaggregate): daily second aggregate, seconds since midnight, tod × 86400
  - [hsa](#hourlysecondaggregate): hourly second aggregate, seconds since the top of the hour, dsa −⌊ 3600
  - [hod](#hourofday): hour of day, ⌊dsa ÷ 3600⌋, 0 to 23
  - [moh](#minuteofhour): minute of hour, ⌊hsa ÷ 60⌋, 0 to 59
  - [som](#secondofminute): second of minute, ⌊hsa −⌊ 60⌋, 0 to 59
  - [mst](#meansolartime): mean solar time, solar time based only on longitude and the Zone 0 tod
  - [ast](#apparentsolartime): apparent solar time, mst + eot(toy), solar time based on the actual position of the Sun
  - [law](#lightarcwhole): light arc whole, the time from sunrise to sunset, 1 − naw, sunset − sunrise
  - [lah](#lightarchalf): light arc half, law/2, the time from sunrise to solar noon or from solar noon to sunset
  - [naw](#nightarcwhole): night arc whole, the time from sunset to sunrise, 1 − law
  - [nah](#nightarchalf): night arc half, naw/2, the time from sunset to solar midnight or from solar midnight to sunrise
- [t](#turn): turn, 360 degrees, 𝜏 or 2𝜋 radians
  - [ct](#centiturn): centiturn, a hundredth of a turn, 3.6 degrees, 𝜏/100 or 𝜋/50 radians
  - [dt](#deciturn): deciturn, a tenth of a turn, 36 degrees, 𝜏/10 or 𝜋/5 radians
  - [mt](#milliturn): milliturn, a thousandth of a turn, .36 degrees, 𝜏/1000 or 𝜋/500 radians
- [tzo](#timezoneoffset): time zone offset
- [u](#ounce): ounce (uncia in Latin), 500 grains, 32 grams, 500 drops, 32 milliliters
- [uto](#universaltimeoffset): universal time offset, the offset in decidays that turns a Zone 0 tod into Universal Time; a tzo is an integer uto
  - [sto](#solartimeoffset): solar time offset, any offset added to a Zone 0 tod, written after the tod as tod-offset; represents a single longitude, whereas a tzo is one of the 10 single-digit offsets of the Dec time zones
- [UTC](#coordinateduniversaltime): [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
- [US](#unitedstates): [United States](https://en.wikipedia.org/wiki/Imperial_and_US_customary_measurement_systems)
- [UT](#universaltime): [Universal Time](https://en.wikipedia.org/wiki/Universal_Time#:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation), a time standard based on the rotation of the Earth
- [v](#omegar): omegar, ωr, 1041.♄ miles per hour, 1.♄ megameters per hour, 0.4♃♄ kilometers per second, roughly 1.36 times the speed of sound
  - [kv](#kiloomegar): kiloomegar, kωr, 1.♄ gigameters per hour, 0.4♃♄ megameters per second, approximately 0.1544% of the speed of light
  - [mv](#milliomegar): milliomegar, mωr, 1.041♄ miles per hour, 1.♄ kilometers per hour, 0.4♃♄ meters per second, approximately 0.136% of the speed of sound
- [w](#wei): wěi (纬), parallel, a full circle around the Earth moving East or West at the same latitude, a measure of longitude; short for 纬圈 (wěiquān), “latitude circle”; can be thought of as a measure of the **w**idth of a jīng on **E**arth; “w” is written from left to right, like a wěi running from **W**est to **E**ast across a map, starts the word “width,” as in the width of a map, and is one of the widest letters in proportional fonts; on a loom, 纬 is the weft, the threads that run crosswise
  - [dw](#deciwei): deciwěi, a tenth of a wěi (纬), a tenth of a parallel
  - [mw](#milliwei): milliwěi, a thousandth of a wěi (纬), a thousandth of a parallel
  - [µw](#microwei): microwěi, a millionth of a wěi (纬), a millionth of a parallel
- [x](#xun): xún (旬), decaday, a group of ten days, 2 pentadays, represented by x like the Roman numeral X
  - [pix](#positiveintegerxun): positive integer xún, ⌊pid ÷ 10⌋, 0 to 36
  - [nix](#negativeintegerxun): negative integer xún, ⌊nid ÷ 10⌋, -37 to -1
  - [mix](#mixedintegerxun): mixed integer xún, the first two digits of an nih mid
  - [xir](#xuninterdecilerange): xún interdecile range, Dox 1 to 8, the days between Dox 0 and 9
- [y](#year): year
  - [my](#milliyear): milliyear, a thousandth of a year
  - [yoe](#yearofera): year of era, integer years since the Dec epoch
  - [eya](#epochalyearaggregate): epochal year aggregate, yoe + toy, years since the Dec epoch including the fraction of the current year
  - [toy](#timeofyear): time of year, the fraction of the year that has elapsed, eya −⌊ 1, ada ÷ syl
  - [ymd](#yearmonthday): year month day, a Gregorian calendar date triplet
  - [syl](#solaryearlength): solar year length, 365 or 366 days, pid − nid
  - [lyl](#lunaryearlength): lunar year length, 354 or 355 days
  - [cey](#commonerayear): common era year, an ISO 8601 (Gregorian calendar) year number
  - [qoe](#quadricentennialofera): quadricentennial of era, quadricentennials since the Dec epoch
  - [yoq](#yearofquadricentennial): year of quadricentennial, years since the start of the current quadricentennial, 0 to 399
  - [yot](#yearoftricennium): year of tricennium, lunar years since the start of the current 30-year lunar cycle, 0 to 29
  - [moy](#monthofyear): month of year, zero-based, Moy 0 is March
  - [woy](#weekofyear): week of year, (boydow + bow) ÷ 7, 0 to 53
  - [wom](#weekofmonth): week of month
- [z](#zoneequatorialmeter): zem, zone equatorial meter, 4 decimeters, 16 inches
  - [kz²](#squarekilozem): square kilozem, a million square zem, megahexamilliare, Mx, hexakilare, 16 hectares, 1600 ares, 40 acres, 0.16 square kilometers, 0.0625 square miles
  - [kz](#kilozem): kilozem, 1000 zem, 400 meters, a quarter mile
  - [z²](#squarezem): square zem, hexamilliare, 16 square decimeters, 1.♅ square feet, 256 square inches
  - [cz²](#squarecentizem): square centizem, a ten-thousandth of a square zem, 16 square millimeters
  - [Dz²](#squaredecazem): square decazem, 1 hexadeciare, 16 square meters, 19.75 square yards, 100 square zem
  - [z³](#cubiczem): cubic zem, 1 keg, 64 liters, 1000 wine glasses, a million drops, half a barrel
  - [dz³](#cubicdecizem): cubic decizem, 1000 drops, 64 milliliters, 2 ounces, 1 wine glass
  - [cz³](#cubiccentizem): cubic centizem, 1 drop, 64 microliters
  - [dz](#decizem): decizem, a tenth of a zem, 4 centimeters
  - [cz](#centizem): centizem, a hundredth of a zem, 4 millimeters
  - [mz](#millizem): millizem, a thousandth of a zem, 0.4 millimeters

Back to top

## References

Hinnant, Howard. 2021+185. *`chrono`-Compatible Low-Level Date Algorithms*. <https://howardhinnant.github.io/date_algorithms>.

## Footnotes

## Reuse

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

[^1]: [Hinnant, Howard](https://howardhinnant.github.io). 2021+185. *`chrono`-Compatible Low-Level Date Algorithms*. <https://howardhinnant.github.io/date_algorithms.html>.
