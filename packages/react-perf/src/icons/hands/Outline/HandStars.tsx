/* GENERATED FILE */
import React from "react"
import { forwardRef } from "react"
import IconBase from "../../../lib/IconBase"
import type { IconProps, Icon } from "../../../lib/types"

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMi45MDA0OUMxMS44ODExIDMuMDc2OTkgMTEuNzM0NiAzLjMzNzE3IDExLjUxNjQgMy43Mjg1M0wxMS4zODUzIDMuOTYzNjdDMTEuMzc1NiAzLjk4MTEzIDExLjM2NTUgMy45OTkzOCAxMS4zNTUxIDQuMDE4MjdDMTEuMjQ2NiA0LjIxNTU3IDExLjA5OTEgNC40ODM1OSAxMC44NTU1IDQuNjY4NDlDMTAuNjA3NCA0Ljg1NjgxIDEwLjMwODMgNC45MjI2NiAxMC4wOTQ0IDQuOTY5NzRDMTAuMDc0MSA0Ljk3NDIxIDEwLjA1NDYgNC45Nzg1MSAxMC4wMzU5IDQuOTgyNzNMOS43ODEzNiA1LjA0MDMyQzkuMzE2MTggNS4xNDU1NyA5LjAyNjI5IDUuMjEyOTQgOC44MzE0OSA1LjI4MTA0QzguOTUxOTQgNS40NjIgOS4xNTQxMSA1LjcwMTAyIDkuNDgyMDcgNi4wODQ1M0w5LjY1NTYgNi4yODc0NUM5LjY2ODM3IDYuMzAyMzcgOS42ODE2NyA2LjMxNzc4IDkuNjk1NDEgNi4zMzM2N0M5Ljg0MzE1IDYuNTA0NzEgMTAuMDM5NyA2LjczMjI0IDEwLjEzMDYgNy4wMjQzOEMxMC4yMjA1IDcuMzEzNDggMTAuMTkgNy42MTI1OSAxMC4xNjY4IDcuODQxMjJDMTAuMTY0NiA3Ljg2MjU3IDEwLjE2MjUgNy44ODMzMSAxMC4xNjA1IDcuOTAzMzZMMTAuMTM0MyA4LjE3NDFDMTAuMDg3NCA4LjY1Nzc0IDEwLjA1ODYgOC45NzA2IDEwLjA1OTQgOS4xOTE5MUMxMC4yNTE2IDkuMTIzNzkgMTAuNTE0OSA5LjAwNDIgMTAuOTE2NiA4LjgxOTIxTDExLjE1NSA4LjcwOTQ4QzExLjE3MjUgOC43MDE0IDExLjE5MDkgOC42OTI4MSAxMS4yMSA4LjY4Mzg2QzExLjQwNzggOC41OTEyOCAxMS42ODg1IDguNDU5OTQgMTIgOC40NTk5NEMxMi4zMTE2IDguNDU5OTQgMTIuNTkyMiA4LjU5MTI4IDEyLjc5MDEgOC42ODM4NkMxMi44MDkyIDguNjkyODEgMTIuODI3NiA4LjcwMTQgMTIuODQ1MSA4LjcwOTQ4TDEzLjA4MzQgOC44MTkyMUMxMy40ODUyIDkuMDA0MjEgMTMuNzQ4NSA5LjEyMzggMTMuOTQwNyA5LjE5MTkxQzEzLjk0MTUgOC45NzA2IDEzLjkxMjYgOC42NTc3NCAxMy44NjU4IDguMTc0MUwxMy44Mzk1IDcuOTAzMzZDMTMuODM3NiA3Ljg4MzMxIDEzLjgzNTUgNy44NjI1NyAxMy44MzMzIDcuODQxMjNDMTMuODEwMSA3LjYxMjU5IDEzLjc3OTYgNy4zMTM0OCAxMy44Njk1IDcuMDI0MzhDMTMuOTYwNCA2LjczMjI0IDE0LjE1NjkgNi41MDQ3IDE0LjMwNDcgNi4zMzM2N0MxNC4zMTg0IDYuMzE3NzggMTQuMzMxNyA2LjMwMjM3IDE0LjM0NDUgNi4yODc0NEwxNC41MTggNi4wODQ1M0MxNC44NDYgNS43MDEwMiAxNS4wNDgxIDUuNDYyIDE1LjE2ODYgNS4yODEwNEMxNC45NzM4IDUuMjEyOTQgMTQuNjgzOSA1LjE0NTU3IDE0LjIxODcgNS4wNDAzMkwxMy45NjQyIDQuOTgyNzNDMTMuOTQ1NSA0Ljk3ODUxIDEzLjkyNiA0Ljk3NDIxIDEzLjkwNTcgNC45Njk3NEMxMy42OTE4IDQuOTIyNjYgMTMuMzkyNiA0Ljg1NjgxIDEzLjE0NDYgNC42Njg0OUMxMi45MDEgNC40ODM1OSAxMi43NTM1IDQuMjE1NTYgMTIuNjQ0OSA0LjAxODI2QzEyLjYzNDUgMy45OTkzNyAxMi42MjQ1IDMuOTgxMTMgMTIuNjE0OCAzLjk2MzY3TDEyLjQ4MzcgMy43Mjg1M0MxMi4yNjU1IDMuMzM3MTcgMTIuMTE5IDMuMDc2OTkgMTIgMi45MDA0OVpNMTQuMTUzIDkuMjUwMkMxNC4xNTQxIDkuMjUwMjMgMTQuMTU0NyA5LjI1MDI4IDE0LjE1NDcgOS4yNTAyOUwxNC4xNTMgOS4yNTAyWk05Ljg0NTM2IDkuMjUwMjlDOS44NDUzOCA5LjI1MDI4IDkuODQ1OTcgOS4yNTAyMyA5Ljg0NzEgOS4yNTAyTDkuODQ1MzYgOS4yNTAyOVpNMTAuODgzMiAxLjg4NDg0QzExLjA5ODkgMS42MDMyMSAxMS40NTEgMS4yNSAxMiAxLjI1QzEyLjU0OTEgMS4yNSAxMi45MDEyIDEuNjAzMjEgMTMuMTE2OSAxLjg4NDg0QzEzLjMyNDYgMi4xNTYwNCAxMy41MzcyIDIuNTM3NTEgMTMuNzY4MyAyLjk1MjRDMTMuNzc2OCAyLjk2NzYxIDEzLjc4NTMgMi45ODI4NyAxMy43OTM5IDIuOTk4MTdMMTMuOTI0OSAzLjIzMzMyQzEzLjk2MTcgMy4yOTkzNCAxMy45OTAyIDMuMzUwMzcgMTQuMDE1NSAzLjM5NDEyQzE0LjAzMjUgMy40MjM1MiAxNC4wNDU4IDMuNDQ1NzMgMTQuMDU2NSAzLjQ2Mjg2QzE0LjA3MzMgMy40Njc1MSAxNC4wOTQ2IDMuNDczMDMgMTQuMTIxOSAzLjQ3OTY3QzE0LjE2ODkgMy40OTExMSAxNC4yMjM2IDMuNTAzNTEgMTQuMjk1MiAzLjUxOTcxTDE0LjU0OTcgMy41NzczQzE0LjU2NzEgMy41ODEyMyAxNC41ODQ0IDMuNTg1MTQgMTQuNjAxNyAzLjU4OTA1QzE1LjA0ODYgMy42OTAwOSAxNS40NjU3IDMuNzg0MzkgMTUuNzgwNyAzLjkwODUyQzE2LjEyMiA0LjA0MzAyIDE2LjUzNDMgNC4yODU0MyAxNi42OTMyIDQuNzk2MzhDMTYuODQ5NiA1LjI5OTE2IDE2LjY1NzEgNS43MzMyMSAxNi40NjI3IDYuMDQyMUMxNi4yOCA2LjMzMjMgMTUuOTk4IDYuNjYxOTggMTUuNjkxNiA3LjAyMDEzTDE1LjQ4NDUgNy4yNjIzM0MxNS40MzU3IDcuMzE5MzMgMTUuMzk4MiA3LjM2MzI4IDE1LjM2NjMgNy40MDE3OUMxNS4zNDAxIDcuNDMzMzggMTUuMzIyIDcuNDU2MTkgMTUuMzA5MSA3LjQ3MzRDMTUuMzEwOCA3LjUyOTEgMTUuMzE3OSA3LjYwNzUyIDE1LjMzMjUgNy43NTg2OEwxNS4zNjM3IDguMDgwMzRDMTUuNDEwMiA4LjU1OTU4IDE1LjQ1MjcgOC45OTcgMTUuNDM3MyA5LjM0MTVDMTUuNDIxNCA5LjY5OTQzIDE1LjMzNjkgMTAuMTc4NSAxNC45MTE1IDEwLjUwMTVDMTQuNDczNyAxMC44MzM3IDEzLjk4NDcgMTAuNzY4OSAxMy42Mzc4IDEwLjY2OTVDMTMuMzEzMiAxMC41NzY1IDEyLjkyMzEgMTAuMzk2OSAxMi41MDQ5IDEwLjIwNDJDMTIuNDg4NyAxMC4xOTY3IDEyLjQ3MjQgMTAuMTg5MiAxMi40NTYxIDEwLjE4MTdMMTIuMjE3OCAxMC4wNzJDMTIuMTUwNyAxMC4wNDExIDEyLjA5OTQgMTAuMDE3NSAxMi4wNTQ5IDkuOTk3ODhDMTIuMDMyOSA5Ljk4ODIgMTIuMDE0OSA5Ljk4MDUyIDEyIDkuOTc0MzhDMTEuOTg1MSA5Ljk4MDUyIDExLjk2NzEgOS45ODgyIDExLjk0NTIgOS45OTc4OEMxMS45MDA2IDEwLjAxNzUgMTEuODQ5MyAxMC4wNDExIDExLjc4MjMgMTAuMDcyTDExLjU0NCAxMC4xODE3QzExLjUyNzcgMTAuMTg5MiAxMS41MTE0IDEwLjE5NjcgMTEuNDk1MiAxMC4yMDQyQzExLjA3NjkgMTAuMzk2OSAxMC42ODY5IDEwLjU3NjUgMTAuMzYyMiAxMC42Njk1QzEwLjAxNTQgMTAuNzY4OSA5LjUyNjMyIDEwLjgzMzcgOS4wODg2MSAxMC41MDE1QzguNjYzMTQgMTAuMTc4NSA4LjU3ODcgOS42OTk0MyA4LjU2Mjc2IDkuMzQxNUM4LjU0NzQxIDguOTk3IDguNTg5ODUgOC41NTk2IDguNjM2MzUgOC4wODAzN0M4LjYzNzk5IDguMDYzNDQgOC42Mzk2NCA4LjA0NjQ2IDguNjQxMjkgOC4wMjk0Mkw4LjY2NzUzIDcuNzU4NjhDOC42ODIxNyA3LjYwNzUyIDguNjg5MzIgNy41MjkxIDguNjkxMDEgNy40NzM0MUM4LjY3ODA3IDcuNDU2MTkgOC42NTk5OCA3LjQzMzM4IDguNjMzODIgNy40MDE4QzguNjAxOSA3LjM2MzI4IDguNTY0MzQgNy4zMTkzMyA4LjUxNTYgNy4yNjIzM0w4LjM0MjA3IDcuMDU5NDFDOC4zMzA4NCA3LjA0NjI4IDguMzE5NjMgNy4wMzMxOCA4LjMwODQ2IDcuMDIwMTFDOC4wMDIxMSA2LjY2MTk3IDcuNzIwMSA2LjMzMjI5IDcuNTM3NDIgNi4wNDIxQzcuMzQyOTcgNS43MzMyMSA3LjE1MDQ4IDUuMjk5MTYgNy4zMDY4MyA0Ljc5NjM4QzcuNDY1NzIgNC4yODU0MyA3Ljg3ODA5IDQuMDQzMDIgOC4yMTkzOCAzLjkwODUyQzguNTM0MzYgMy43ODQzOSA4Ljk1MTQ5IDMuNjkwMDkgOS4zOTgzOSAzLjU4OTA1QzkuNDE1NjYgMy41ODUxNSA5LjQzMjk4IDMuNTgxMjMgOS40NTAzNCAzLjU3NzNMOS43MDQ4OCAzLjUxOTcxQzkuNzc2NDkgMy41MDM1MSA5LjgzMTE3IDMuNDkxMTIgOS44NzgxNyAzLjQ3OTY3QzkuOTA1NDYgMy40NzMwMiA5LjkyNjczIDMuNDY3NTEgOS45NDM1NSAzLjQ2Mjg3QzkuOTU0MjggMy40NDU3MyA5Ljk2NzU5IDMuNDIzNTIgOS45ODQ1OCAzLjM5NDEyQzEwLjAwOTkgMy4zNTAzNyAxMC4wMzgzIDMuMjk5MzQgMTAuMDc1MSAzLjIzMzMyTDEwLjIwNjIgMi45OTgxN0MxMC4yMTQ3IDIuOTgyODcgMTAuMjIzMiAyLjk2NzYxIDEwLjIzMTcgMi45NTI0QzEwLjQ2MjkgMi41Mzc1MSAxMC42NzU1IDIuMTU2MDQgMTAuODgzMiAxLjg4NDg0Wk00LjAwMDA0IDguMjAxNjJDNC4wNTIyIDguMjk3OTQgNC4xNjMyNiA4LjQ5NDU0IDQuMzQ1NTYgOC42MzI5M0M0LjU0MTQ3IDguNzgxNjUgNC43NzY2MiA4LjgzMTE3IDQuODc0MzQgOC44NTE3NUM0Ljg4NDExIDguODUzOCA0Ljg5MjUgOC44NTU1NyA0Ljg5OTM1IDguODU3MTJMNC45MTk5NCA4Ljg2MTc4TDQuODg3MjUgOC45QzQuODgyMjMgOC45MDU4NyA0Ljg3NjE4IDguOTEyNzcgNC44NjkyNiA4LjkyMDY1QzQuODAwNjkgOC45OTg3OCA0LjY0NzQxIDkuMTczNDIgNC41NzY2OSA5LjQwMDg0QzQuNTA2OTQgOS42MjUxMyA0LjUzMjA4IDkuODU0ODMgNC41NDM1NiA5Ljk1OTc4QzQuNTQ0NzMgOS45NzA0OCA0LjU0NTc2IDkuOTc5ODggNC41NDY1NCA5Ljk4Nzg1TDQuNTQ3NjEgOS45OTg5OEM0LjQ1MzMxIDkuOTUzODUgNC4yMzk1MSA5Ljg1NDk3IDQuMDAwMDQgOS44NTQ5N0MzLjc2MDU2IDkuODU0OTcgMy41NDY3NiA5Ljk1Mzg1IDMuNDUyNDYgOS45OTg5OEwzLjQ1MzU0IDkuOTg3ODVDMy40NTQzMSA5Ljk3OTg4IDMuNDU1MzQgOS45NzA0OCAzLjQ1NjUxIDkuOTU5NzhDMy40Njc5OSA5Ljg1NDgzIDMuNDkzMTMgOS42MjUxMyAzLjQyMzM4IDkuNDAwODRDMy4zNTI2NiA5LjE3MzQyIDMuMTk5MzggOC45OTg3OCAzLjEzMDgxIDguOTIwNjVDMy4xMjM4OSA4LjkxMjc3IDMuMTE3ODQgOC45MDU4NyAzLjExMjgyIDguOUwzLjA4MDEzIDguODYxNzhMMy4xMDA3MiA4Ljg1NzEyQzMuMTA3NTcgOC44NTU1NyAzLjExNTk2IDguODUzOCAzLjEyNTczIDguODUxNzVDMy4yMjM0NSA4LjgzMTE3IDMuNDU4NiA4Ljc4MTY1IDMuNjU0NTEgOC42MzI5M0MzLjgzNjgxIDguNDk0NTQgMy45NDc4NyA4LjI5Nzk0IDQuMDAwMDQgOC4yMDE2MlpNMi45MzUyMSA4LjEyNTYxTDIuNzkzMzMgNy40OTg1TDIuOTM1MjEgOC4xMjU2MVpNMy40MDYwNCAxMC42MzI0QzMuNDA2MjUgMTAuNjMzOCAzLjQwNjMyIDEwLjYzNDYgMy40MDYzMSAxMC42MzQ2TDMuNDA2MDQgMTAuNjMyNFpNNC41OTM3NyAxMC42MzQ2QzQuNTkzNzUgMTAuNjM0NiA0LjU5MzgyIDEwLjYzMzggNC41OTQwMyAxMC42MzI0TDQuNTkzNzcgMTAuNjM0NlpNMy4xNDM4OCA2LjcxNDQyQzMuMjcyNTUgNi41NDY0MSAzLjU0NTY4IDYuMjUgNC4wMDAwNCA2LjI1QzQuNDU0MzkgNi4yNSA0LjcyNzUyIDYuNTQ2NDEgNC44NTYxOSA2LjcxNDQyQzQuOTc3MjcgNi44NzI1MyA1LjA5NTkyIDcuMDg1NjEgNS4yMDUwOSA3LjI4MTY2QzUuMjExNTkgNy4yOTMzNCA1LjIxODA2IDcuMzA0OTYgNS4yMjQ0OSA3LjMxNjVMNS4yNzMxNSA3LjQwMzc4TDUuMzU3NjQgNy40MjI5QzUuMzcwNTEgNy40MjU4MSA1LjM4MzQ5IDcuNDI4NzQgNS4zOTY1NiA3LjQzMTY5QzUuNjA3NDUgNy40NzkyOCA1Ljg0MjQ4IDcuNTMyMzIgNi4wMjc4NSA3LjYwNTM4QzYuMjM4ODUgNy42ODg1MyA2LjU3NTA5IDcuODY5OTggNi43MDQ3MiA4LjI4Njg0QzYuODMxODEgOC42OTU1MiA2LjY2NjYyIDkuMDMzNTEgNi41NDg3IDkuMjIwODNDNi40NDIxOSA5LjM5MDAyIDYuMjg0NDYgOS41NzQzIDYuMTM5NiA5Ljc0MzUzQzYuMTMxMDIgOS43NTM1NSA2LjEyMjQ5IDkuNzYzNTIgNi4xMTQwMiA5Ljc3MzQzTDYuMDQxMDUgOS44NTg3NUw2LjA1MjY2IDkuOTc4NTRDNi4wNTM5MiA5Ljk5MTUxIDYuMDU1MTkgMTAuMDA0NiA2LjA1NjQ2IDEwLjAxNzdDNi4wNzg1MiAxMC4yNDQzIDYuMTAyMiAxMC40ODc3IDYuMDkzMyAxMC42ODc0QzYuMDgzODMgMTAuOSA2LjAzMTM2IDExLjI4NDYgNS42ODI0OSAxMS41NDk0QzUuMzIxMzggMTEuODIzNSA0LjkyODIyIDExLjc1NjIgNC43MTU2NCAxMS42OTUzQzQuNTI0NiAxMS42NDA1IDQuMzA1MDUgMTEuNTM5MyA0LjEwNzggMTEuNDQ4M0M0LjA5NTUyIDExLjQ0MjcgNC4wODMzMyAxMS40MzcxIDQuMDcxMjMgMTEuNDMxNUw0LjAwMDAzIDExLjM5ODdMMy45Mjg4NCAxMS40MzE1QzMuOTE2NzUgMTEuNDM3MSAzLjkwNDU1IDExLjQ0MjcgMy44OTIyNyAxMS40NDgzQzMuNjk1MDIgMTEuNTM5MyAzLjQ3NTQ3IDExLjY0MDUgMy4yODQ0MyAxMS42OTUzQzMuMDcxODYgMTEuNzU2MiAyLjY3ODY5IDExLjgyMzUgMi4zMTc1OCAxMS41NDk0QzEuOTY4NzIgMTEuMjg0NiAxLjkxNjI0IDEwLjkgMS45MDY3NyAxMC42ODc0QzEuODk3ODcgMTAuNDg3NyAxLjkyMTU1IDEwLjI0NDMgMS45NDM2MSAxMC4wMTc3QzEuOTQ0ODggMTAuMDA0NiAxLjk0NjE1IDkuOTkxNTIgMS45NDc0MSA5Ljk3ODU0TDEuOTU5MDIgOS44NTg3NUwxLjg4NjA1IDkuNzczNDNDMS44Nzc1OCA5Ljc2MzUyIDEuODY5MDUgOS43NTM1NSAxLjg2MDQ3IDkuNzQzNTNDMS43MTU2MSA5LjU3NDMgMS41NTc4OCA5LjM5MDAyIDEuNDUxMzcgOS4yMjA4M0MxLjMzMzQ1IDkuMDMzNTEgMS4xNjgyNiA4LjY5NTUyIDEuMjk1MzUgOC4yODY4NEMxLjQyNDk4IDcuODY5OTggMS43NjEyMiA3LjY4ODUzIDEuOTcyMjIgNy42MDUzOEMyLjE1NzU5IDcuNTMyMzIgMi4zOTI2MiA3LjQ3OTI4IDIuNjAzNTEgNy40MzE2OUMyLjYxNjU4IDcuNDI4NzQgMi42Mjk1NiA3LjQyNTgxIDIuNjQyNDMgNy40MjI5TDIuNzI2OTIgNy40MDM3OEwyLjc3NTU4IDcuMzE2NUMyLjc4MjAxIDcuMzA0OTYgMi43ODg0OCA3LjI5MzM0IDIuNzk0OTggNy4yODE2N0MyLjkwNDE1IDcuMDg1NjIgMy4wMjI4IDYuODcyNTMgMy4xNDM4OCA2LjcxNDQyWk0yMCA4LjIwMTYyQzIwLjA1MjIgOC4yOTc5MyAyMC4xNjMzIDguNDk0NTQgMjAuMzQ1NiA4LjYzMjkzQzIwLjU0MTUgOC43ODE2NSAyMC43NzY2IDguODMxMTcgMjAuODc0MyA4Ljg1MTc0QzIwLjg4NDEgOC44NTM4IDIwLjg5MjUgOC44NTU1NyAyMC44OTkzIDguODU3MTJMMjAuOTE5OSA4Ljg2MTc4TDIwLjg4NzMgOC45QzIwLjg4MjIgOC45MDU4NyAyMC44NzYyIDguOTEyNzcgMjAuODY5MyA4LjkyMDY1QzIwLjgwMDcgOC45OTg3OCAyMC42NDc0IDkuMTczNDIgMjAuNTc2NyA5LjQwMDg0QzIwLjUwNjkgOS42MjUxMyAyMC41MzIxIDkuODU0ODIgMjAuNTQzNiA5Ljk1OTc4QzIwLjU0NDcgOS45NzA0OCAyMC41NDU4IDkuOTc5ODggMjAuNTQ2NSA5Ljk4Nzg1TDIwLjU0NzYgOS45OTg5OEMyMC40NTMzIDkuOTUzODUgMjAuMjM5NSA5Ljg1NDk3IDIwIDkuODU0OTdDMTkuNzYwNiA5Ljg1NDk3IDE5LjU0NjggOS45NTM4NSAxOS40NTI1IDkuOTk4OThMMTkuNDUzNSA5Ljk4Nzg1QzE5LjQ1NDMgOS45Nzk4OCAxOS40NTUzIDkuOTcwNDggMTkuNDU2NSA5Ljk1OTc4QzE5LjQ2OCA5Ljg1NDgzIDE5LjQ5MzEgOS42MjUxMyAxOS40MjM0IDkuNDAwODRDMTkuMzUyNyA5LjE3MzQyIDE5LjE5OTQgOC45OTg3OCAxOS4xMzA4IDguOTIwNjVDMTkuMTIzOSA4LjkxMjc3IDE5LjExNzggOC45MDU4NyAxOS4xMTI4IDguOTAwMDFMMTkuMDgwMSA4Ljg2MTc4TDE5LjEwMDcgOC44NTcxMkMxOS4xMDc2IDguODU1NTcgMTkuMTE2IDguODUzOCAxOS4xMjU3IDguODUxNzVDMTkuMjIzNCA4LjgzMTE3IDE5LjQ1ODYgOC43ODE2NSAxOS42NTQ1IDguNjMyOTNDMTkuODM2OCA4LjQ5NDU0IDE5Ljk0NzkgOC4yOTc5MyAyMCA4LjIwMTYyWk0xOS40MDYgMTAuNjMyNEMxOS40MDYzIDEwLjYzNCAxOS40MDYzIDEwLjYzNDcgMTkuNDA2MyAxMC42MzQ2TDE5LjQwNiAxMC42MzI0Wk0xOS4xNDM5IDYuNzE0NDJDMTkuMjcyNSA2LjU0NjQxIDE5LjU0NTcgNi4yNSAyMCA2LjI1QzIwLjQ1NDQgNi4yNSAyMC43Mjc1IDYuNTQ2NDEgMjAuODU2MiA2LjcxNDQyQzIwLjk3NzMgNi44NzI1MyAyMS4wOTU5IDcuMDg1NjEgMjEuMjA1MSA3LjI4MTY2QzIxLjIxMTYgNy4yOTMzNCAyMS4yMTgxIDcuMzA0OTYgMjEuMjI0NSA3LjMxNjVMMjEuMjczMSA3LjQwMzc4TDIxLjM1NzYgNy40MjI5QzIxLjM3MDUgNy40MjU4MSAyMS4zODM1IDcuNDI4NzQgMjEuMzk2NiA3LjQzMTY5QzIxLjYwNzUgNy40NzkyOCAyMS44NDI1IDcuNTMyMzMgMjIuMDI3OSA3LjYwNTM4QzIyLjIzODggNy42ODg1MyAyMi41NzUxIDcuODY5OTggMjIuNzA0NyA4LjI4Njg0QzIyLjgzMTggOC42OTU1MiAyMi42NjY2IDkuMDMzNTEgMjIuNTQ4NyA5LjIyMDgzQzIyLjQ0MjIgOS4zOTAwMyAyMi4yODQ0IDkuNTc0MzEgMjIuMTM5NiA5Ljc0MzU0QzIyLjEzMSA5Ljc1MzU2IDIyLjEyMjUgOS43NjM1MiAyMi4xMTQgOS43NzM0M0wyMi4wNDEgOS44NTg3NUwyMi4wNTI3IDkuOTc4NTRDMjIuMDUzOSA5Ljk5MTUxIDIyLjA1NTIgMTAuMDA0NiAyMi4wNTY1IDEwLjAxNzZDMjIuMDc4NSAxMC4yNDQzIDIyLjEwMjIgMTAuNDg3NyAyMi4wOTMzIDEwLjY4NzRDMjIuMDgzOCAxMC45IDIyLjAzMTQgMTEuMjg0NiAyMS42ODI1IDExLjU0OTRDMjEuMzIxNCAxMS44MjM1IDIwLjkyODIgMTEuNzU2MiAyMC43MTU2IDExLjY5NTNDMjAuNTI0NiAxMS42NDA1IDIwLjMwNTEgMTEuNTM5MyAyMC4xMDc4IDExLjQ0ODRDMjAuMDk1NSAxMS40NDI3IDIwLjA4MzMgMTEuNDM3MSAyMC4wNzEyIDExLjQzMTVMMjAgMTEuMzk4N0wxOS45Mjg4IDExLjQzMTVDMTkuOTE2NyAxMS40MzcxIDE5LjkwNDYgMTEuNDQyNyAxOS44OTIzIDExLjQ0ODNDMTkuNjk1IDExLjUzOTMgMTkuNDc1NSAxMS42NDA1IDE5LjI4NDQgMTEuNjk1M0MxOS4wNzE5IDExLjc1NjIgMTguNjc4NyAxMS44MjM1IDE4LjMxNzYgMTEuNTQ5NEMxNy45Njg3IDExLjI4NDYgMTcuOTE2MiAxMC45IDE3LjkwNjggMTAuNjg3NEMxNy44OTc5IDEwLjQ4NzcgMTcuOTIxNSAxMC4yNDQzIDE3Ljk0MzYgMTAuMDE3N0MxNy45NDQ5IDEwLjAwNDYgMTcuOTQ2MiA5Ljk5MTUyIDE3Ljk0NzQgOS45Nzg1NUwxNy45NTkgOS44NTg3NUwxNy44ODYxIDkuNzczNDNDMTcuODc3NiA5Ljc2MzUyIDE3Ljg2OSA5Ljc1MzU0IDE3Ljg2MDUgOS43NDM1MkMxNy43MTU2IDkuNTc0MjkgMTcuNTU3OSA5LjM5MDAyIDE3LjQ1MTQgOS4yMjA4M0MxNy4zMzM1IDkuMDMzNTEgMTcuMTY4MyA4LjY5NTUyIDE3LjI5NTMgOC4yODY4NEMxNy40MjUgNy44Njk5OCAxNy43NjEyIDcuNjg4NTMgMTcuOTcyMiA3LjYwNTM4QzE4LjE1NzYgNy41MzIzMiAxOC4zOTI2IDcuNDc5MjggMTguNjAzNSA3LjQzMTY5QzE4LjYxNjYgNy40Mjg3NCAxOC42Mjk2IDcuNDI1ODEgMTguNjQyNCA3LjQyMjlMMTguNzI2OSA3LjQwMzc4TDE4Ljc3NTYgNy4zMTY1QzE4Ljc4MiA3LjMwNDk2IDE4Ljc4ODUgNy4yOTMzNCAxOC43OTUgNy4yODE2N0MxOC45MDQxIDcuMDg1NjIgMTkuMDIyOCA2Ljg3MjUzIDE5LjE0MzkgNi43MTQ0MlpNMjAuNTkzOCAxMC42MzQ2QzIwLjU5MzggMTAuNjM0NiAyMC41OTM4IDEwLjYzMzggMjAuNTk0IDEwLjYzMjRMMjAuNTkzOCAxMC42MzQ2Wk04LjY4Mzk1IDE0LjQ0ODJDMTAuNTQ5OCAxNC4wODY3IDEyLjU0NzEgMTQuMTY3OCAxNC4xNjMzIDE1LjEzMThDMTQuMzkwMyAxNS4yNjcyIDE0LjYwMzEgMTUuNDM1OSAxNC43ODg4IDE1LjY0NDRDMTUuMTY0NiAxNi4wNjY2IDE1LjM1ODcgMTYuNTkxMyAxNS4zNjc5IDE3LjExNzRDMTUuNTU5MiAxNi45OTQgMTUuNzUwOCAxNi44NTcgMTUuOTQ1NCAxNi43MUwxNy43NTI2IDE1LjM0NDhDMTguNjU3MiAxNC42NjE1IDE5Ljk3MTggMTQuNjYxNCAyMC44NzY1IDE1LjM0NDVDMjEuNzEyNCAxNS45NzU3IDIyLjA0NTcgMTcuMTA4NSAyMS40NDczIDE4LjA2NzdDMjEuMDIyIDE4Ljc0OTUgMjAuMzgxNCAxOS42OTI0IDE5LjcyOTYgMjAuMjk2MkMxOS4wNzA3IDIwLjkwNjUgMTguMTMyOSAyMS40MTk2IDE3LjQyMzUgMjEuNzYyQzE2LjU2MiAyMi4xNzc4IDE1LjYzMTYgMjIuNDA3NyAxNC43MjY4IDIyLjU1NDFDMTIuODc3NiAyMi44NTM0IDEwLjk1MzUgMjIuODA3NiA5LjEyNTAzIDIyLjQzMUM4LjE5MDYyIDIyLjIzODQgNy4yMTk1OCAyMi4xMzg0IDYuMjU5OTcgMjIuMTM4NEg0LjAwMDA0QzMuNTg1ODIgMjIuMTM4NCAzLjI1MDA0IDIxLjgwMjYgMy4yNTAwNCAyMS4zODg0QzMuMjUwMDQgMjAuOTc0MiAzLjU4NTgyIDIwLjYzODQgNC4wMDAwNCAyMC42Mzg0SDYuMjU5OTdDNy4zMjIwOCAyMC42Mzg0IDguMzk0NTEgMjAuNzQ5IDkuNDI3NyAyMC45NjE4QzExLjA3OTcgMjEuMzAyMiAxMi44MjAxIDIxLjM0MzIgMTQuNDg3MSAyMS4wNzM0QzE1LjMxNjEgMjAuOTM5MiAxNi4wOTAxIDIwLjc0IDE2Ljc3MTUgMjAuNDExMUMxNy40NTQ5IDIwLjA4MTIgMTguMjIzMyAxOS42NDY4IDE4LjcxMDMgMTkuMTk1N0MxOS4yMDI4IDE4LjczOTUgMTkuNzU0MSAxNy45NDc5IDIwLjE3NDYgMTcuMjczOEMyMC4zMDE2IDE3LjA3MDMgMjAuMjg0IDE2Ljc3NjcgMTkuOTcyNiAxNi41NDE2QzE5LjYwMjkgMTYuMjYyNCAxOS4wMjY0IDE2LjI2MjUgMTguNjU2NyAxNi41NDE3TDE2Ljg0OTUgMTcuOTA2OUMxNi4xMjgxIDE4LjQ1MTggMTUuMjQwMSAxOS4wMzQ5IDE0LjEzODcgMTkuMjEwNkMxNC4wMjc2IDE5LjIyODMgMTMuOTExOSAxOS4yNDQ1IDEzLjc5MTggMTkuMjU4OEMxMy43MzQ1IDE5LjI2OTIgMTMuNjc0OSAxOS4yNzYgMTMuNjEzMyAxOS4yNzgzQzEzLjA1MSAxOS4zMzQyIDEyLjM5OTggMTkuMzQ3MiAxMS42ODEzIDE5LjI3OTNDMTEuMjY4OSAxOS4yNDA0IDEwLjk2NjIgMTguODc0NSAxMS4wMDUxIDE4LjQ2MjFDMTEuMDQ0MSAxOC4wNDk3IDExLjQwOTkgMTcuNzQ3IDExLjgyMjMgMTcuNzg2QzEyLjQ0OTcgMTcuODQ1MiAxMy4wMTI3IDE3LjgzMjEgMTMuNDkwMyAxNy43ODMxQzEzLjQ5OTkgMTcuNzgyMSAxMy41MDk2IDE3Ljc4MTEgMTMuNTE5MiAxNy43ODAxQzEzLjUzOTIgMTcuNzY4NSAxMy41Njk2IDE3Ljc0NzQgMTMuNjA5NiAxNy43MTI1QzEzLjkyOTEgMTcuNDMzNiAxMy45NTc2IDE2Ljk2NjcgMTMuNjY4NCAxNi42NDE4QzEzLjU5NTEgMTYuNTU5NSAxMy41MDQ4IDE2LjQ4NTYgMTMuMzk0OSAxNi40MkMxMi4yMTM4IDE1LjcxNTUgMTAuNjM2MyAxNS41OTc4IDguOTY5MjUgMTUuOTIwOEM3LjMxMTcyIDE2LjI0MTkgNS42NjQ5NCAxNi45ODE3IDQuNDMzODkgMTcuODU0N0M0LjA5NjAyIDE4LjA5NDMgMy42Mjc4NyAxOC4wMTQ2IDMuMzg4MjYgMTcuNjc2OEMzLjE0ODY1IDE3LjMzODkgMy4yMjgzMSAxNi44NzA4IDMuNTY2MTggMTYuNjMxMUM0Ljk2NDU0IDE1LjYzOTUgNi44MDg2MyAxNC44MTE1IDguNjgzOTUgMTQuNDQ4MloiIGZpbGw9IiMxQzI3NEMiLz4KPC9zdmc+Cg==)
 */
export const HandStars:Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.90049C11.8811 3.07699 11.7346 3.33717 11.5164 3.72853L11.3853 3.96367C11.3756 3.98113 11.3655 3.99938 11.3551 4.01827C11.2466 4.21557 11.0991 4.48359 10.8555 4.66849C10.6074 4.85681 10.3083 4.92266 10.0944 4.96974C10.0741 4.97421 10.0546 4.97851 10.0359 4.98273L9.78136 5.04032C9.31618 5.14557 9.02629 5.21294 8.83149 5.28104C8.95194 5.462 9.15411 5.70102 9.48207 6.08453L9.6556 6.28745C9.66837 6.30237 9.68167 6.31778 9.69541 6.33367C9.84315 6.50471 10.0397 6.73224 10.1306 7.02438C10.2205 7.31348 10.19 7.61259 10.1668 7.84122C10.1646 7.86257 10.1625 7.88331 10.1605 7.90336L10.1343 8.1741C10.0874 8.65774 10.0586 8.9706 10.0594 9.19191C10.2516 9.12379 10.5149 9.0042 10.9166 8.81921L11.155 8.70948C11.1725 8.7014 11.1909 8.69281 11.21 8.68386C11.4078 8.59128 11.6885 8.45994 12 8.45994C12.3116 8.45994 12.5922 8.59128 12.7901 8.68386C12.8092 8.69281 12.8276 8.7014 12.8451 8.70948L13.0834 8.81921C13.4852 9.00421 13.7485 9.1238 13.9407 9.19191C13.9415 8.9706 13.9126 8.65774 13.8658 8.1741L13.8395 7.90336C13.8376 7.88331 13.8355 7.86257 13.8333 7.84123C13.8101 7.61259 13.7796 7.31348 13.8695 7.02438C13.9604 6.73224 14.1569 6.5047 14.3047 6.33367C14.3184 6.31778 14.3317 6.30237 14.3445 6.28744L14.518 6.08453C14.846 5.70102 15.0481 5.462 15.1686 5.28104C14.9738 5.21294 14.6839 5.14557 14.2187 5.04032L13.9642 4.98273C13.9455 4.97851 13.926 4.97421 13.9057 4.96974C13.6918 4.92266 13.3926 4.85681 13.1446 4.66849C12.901 4.48359 12.7535 4.21556 12.6449 4.01826C12.6345 3.99937 12.6245 3.98113 12.6148 3.96367L12.4837 3.72853C12.2655 3.33717 12.119 3.07699 12 2.90049ZM14.153 9.2502C14.1541 9.25023 14.1547 9.25028 14.1547 9.25029L14.153 9.2502ZM9.84536 9.25029C9.84538 9.25028 9.84597 9.25023 9.8471 9.2502L9.84536 9.25029ZM10.8832 1.88484C11.0989 1.60321 11.451 1.25 12 1.25C12.5491 1.25 12.9012 1.60321 13.1169 1.88484C13.3246 2.15604 13.5372 2.53751 13.7683 2.9524C13.7768 2.96761 13.7853 2.98287 13.7939 2.99817L13.9249 3.23332C13.9617 3.29934 13.9902 3.35037 14.0155 3.39412C14.0325 3.42352 14.0458 3.44573 14.0565 3.46286C14.0733 3.46751 14.0946 3.47303 14.1219 3.47967C14.1689 3.49111 14.2236 3.50351 14.2952 3.51971L14.5497 3.5773C14.5671 3.58123 14.5844 3.58514 14.6017 3.58905C15.0486 3.69009 15.4657 3.78439 15.7807 3.90852C16.122 4.04302 16.5343 4.28543 16.6932 4.79638C16.8496 5.29916 16.6571 5.73321 16.4627 6.0421C16.28 6.3323 15.998 6.66198 15.6916 7.02013L15.4845 7.26233C15.4357 7.31933 15.3982 7.36328 15.3663 7.40179C15.3401 7.43338 15.322 7.45619 15.3091 7.4734C15.3108 7.5291 15.3179 7.60752 15.3325 7.75868L15.3637 8.08034C15.4102 8.55958 15.4527 8.997 15.4373 9.3415C15.4214 9.69943 15.3369 10.1785 14.9115 10.5015C14.4737 10.8337 13.9847 10.7689 13.6378 10.6695C13.3132 10.5765 12.9231 10.3969 12.5049 10.2042C12.4887 10.1967 12.4724 10.1892 12.4561 10.1817L12.2178 10.072C12.1507 10.0411 12.0994 10.0175 12.0549 9.99788C12.0329 9.9882 12.0149 9.98052 12 9.97438C11.9851 9.98052 11.9671 9.9882 11.9452 9.99788C11.9006 10.0175 11.8493 10.0411 11.7823 10.072L11.544 10.1817C11.5277 10.1892 11.5114 10.1967 11.4952 10.2042C11.0769 10.3969 10.6869 10.5765 10.3622 10.6695C10.0154 10.7689 9.52632 10.8337 9.08861 10.5015C8.66314 10.1785 8.5787 9.69943 8.56276 9.3415C8.54741 8.997 8.58985 8.5596 8.63635 8.08037C8.63799 8.06344 8.63964 8.04646 8.64129 8.02942L8.66753 7.75868C8.68217 7.60752 8.68932 7.5291 8.69101 7.47341C8.67807 7.45619 8.65998 7.43338 8.63382 7.4018C8.6019 7.36328 8.56434 7.31933 8.5156 7.26233L8.34207 7.05941C8.33084 7.04628 8.31963 7.03318 8.30846 7.02011C8.00211 6.66197 7.7201 6.33229 7.53742 6.0421C7.34297 5.73321 7.15048 5.29916 7.30683 4.79638C7.46572 4.28543 7.87809 4.04302 8.21938 3.90852C8.53436 3.78439 8.95149 3.69009 9.39839 3.58905C9.41566 3.58515 9.43298 3.58123 9.45034 3.5773L9.70488 3.51971C9.77649 3.50351 9.83117 3.49112 9.87817 3.47967C9.90546 3.47302 9.92673 3.46751 9.94355 3.46287C9.95428 3.44573 9.96759 3.42352 9.98458 3.39412C10.0099 3.35037 10.0383 3.29934 10.0751 3.23332L10.2062 2.99817C10.2147 2.98287 10.2232 2.96761 10.2317 2.9524C10.4629 2.53751 10.6755 2.15604 10.8832 1.88484ZM4.00004 8.20162C4.0522 8.29794 4.16326 8.49454 4.34556 8.63293C4.54147 8.78165 4.77662 8.83117 4.87434 8.85175C4.88411 8.8538 4.8925 8.85557 4.89935 8.85712L4.91994 8.86178L4.88725 8.9C4.88223 8.90587 4.87618 8.91277 4.86926 8.92065C4.80069 8.99878 4.64741 9.17342 4.57669 9.40084C4.50694 9.62513 4.53208 9.85483 4.54356 9.95978C4.54473 9.97048 4.54576 9.97988 4.54654 9.98785L4.54761 9.99898C4.45331 9.95385 4.23951 9.85497 4.00004 9.85497C3.76056 9.85497 3.54676 9.95385 3.45246 9.99898L3.45354 9.98785C3.45431 9.97988 3.45534 9.97048 3.45651 9.95978C3.46799 9.85483 3.49313 9.62513 3.42338 9.40084C3.35266 9.17342 3.19938 8.99878 3.13081 8.92065C3.12389 8.91277 3.11784 8.90587 3.11282 8.9L3.08013 8.86178L3.10072 8.85712C3.10757 8.85557 3.11596 8.8538 3.12573 8.85175C3.22345 8.83117 3.4586 8.78165 3.65451 8.63293C3.83681 8.49454 3.94787 8.29794 4.00004 8.20162ZM2.93521 8.12561L2.79333 7.4985L2.93521 8.12561ZM3.40604 10.6324C3.40625 10.6338 3.40632 10.6346 3.40631 10.6346L3.40604 10.6324ZM4.59377 10.6346C4.59375 10.6346 4.59382 10.6338 4.59403 10.6324L4.59377 10.6346ZM3.14388 6.71442C3.27255 6.54641 3.54568 6.25 4.00004 6.25C4.45439 6.25 4.72752 6.54641 4.85619 6.71442C4.97727 6.87253 5.09592 7.08561 5.20509 7.28166C5.21159 7.29334 5.21806 7.30496 5.22449 7.3165L5.27315 7.40378L5.35764 7.4229C5.37051 7.42581 5.38349 7.42874 5.39656 7.43169C5.60745 7.47928 5.84248 7.53232 6.02785 7.60538C6.23885 7.68853 6.57509 7.86998 6.70472 8.28684C6.83181 8.69552 6.66662 9.03351 6.5487 9.22083C6.44219 9.39002 6.28446 9.5743 6.1396 9.74353C6.13102 9.75355 6.12249 9.76352 6.11402 9.77343L6.04105 9.85875L6.05266 9.97854C6.05392 9.99151 6.05519 10.0046 6.05646 10.0177C6.07852 10.2443 6.1022 10.4877 6.0933 10.6874C6.08383 10.9 6.03136 11.2846 5.68249 11.5494C5.32138 11.8235 4.92822 11.7562 4.71564 11.6953C4.5246 11.6405 4.30505 11.5393 4.1078 11.4483C4.09552 11.4427 4.08333 11.4371 4.07123 11.4315L4.00003 11.3987L3.92884 11.4315C3.91675 11.4371 3.90455 11.4427 3.89227 11.4483C3.69502 11.5393 3.47547 11.6405 3.28443 11.6953C3.07186 11.7562 2.67869 11.8235 2.31758 11.5494C1.96872 11.2846 1.91624 10.9 1.90677 10.6874C1.89787 10.4877 1.92155 10.2443 1.94361 10.0177C1.94488 10.0046 1.94615 9.99152 1.94741 9.97854L1.95902 9.85875L1.88605 9.77343C1.87758 9.76352 1.86905 9.75355 1.86047 9.74353C1.71561 9.5743 1.55788 9.39002 1.45137 9.22083C1.33345 9.03351 1.16826 8.69552 1.29535 8.28684C1.42498 7.86998 1.76122 7.68853 1.97222 7.60538C2.15759 7.53232 2.39262 7.47928 2.60351 7.43169C2.61658 7.42874 2.62956 7.42581 2.64243 7.4229L2.72692 7.40378L2.77558 7.3165C2.78201 7.30496 2.78848 7.29334 2.79498 7.28167C2.90415 7.08562 3.0228 6.87253 3.14388 6.71442ZM20 8.20162C20.0522 8.29793 20.1633 8.49454 20.3456 8.63293C20.5415 8.78165 20.7766 8.83117 20.8743 8.85174C20.8841 8.8538 20.8925 8.85557 20.8993 8.85712L20.9199 8.86178L20.8873 8.9C20.8822 8.90587 20.8762 8.91277 20.8693 8.92065C20.8007 8.99878 20.6474 9.17342 20.5767 9.40084C20.5069 9.62513 20.5321 9.85482 20.5436 9.95978C20.5447 9.97048 20.5458 9.97988 20.5465 9.98785L20.5476 9.99898C20.4533 9.95385 20.2395 9.85497 20 9.85497C19.7606 9.85497 19.5468 9.95385 19.4525 9.99898L19.4535 9.98785C19.4543 9.97988 19.4553 9.97048 19.4565 9.95978C19.468 9.85483 19.4931 9.62513 19.4234 9.40084C19.3527 9.17342 19.1994 8.99878 19.1308 8.92065C19.1239 8.91277 19.1178 8.90587 19.1128 8.90001L19.0801 8.86178L19.1007 8.85712C19.1076 8.85557 19.116 8.8538 19.1257 8.85175C19.2234 8.83117 19.4586 8.78165 19.6545 8.63293C19.8368 8.49454 19.9479 8.29793 20 8.20162ZM19.406 10.6324C19.4063 10.634 19.4063 10.6347 19.4063 10.6346L19.406 10.6324ZM19.1439 6.71442C19.2725 6.54641 19.5457 6.25 20 6.25C20.4544 6.25 20.7275 6.54641 20.8562 6.71442C20.9773 6.87253 21.0959 7.08561 21.2051 7.28166C21.2116 7.29334 21.2181 7.30496 21.2245 7.3165L21.2731 7.40378L21.3576 7.4229C21.3705 7.42581 21.3835 7.42874 21.3966 7.43169C21.6075 7.47928 21.8425 7.53233 22.0279 7.60538C22.2388 7.68853 22.5751 7.86998 22.7047 8.28684C22.8318 8.69552 22.6666 9.03351 22.5487 9.22083C22.4422 9.39003 22.2844 9.57431 22.1396 9.74354C22.131 9.75356 22.1225 9.76352 22.114 9.77343L22.041 9.85875L22.0527 9.97854C22.0539 9.99151 22.0552 10.0046 22.0565 10.0176C22.0785 10.2443 22.1022 10.4877 22.0933 10.6874C22.0838 10.9 22.0314 11.2846 21.6825 11.5494C21.3214 11.8235 20.9282 11.7562 20.7156 11.6953C20.5246 11.6405 20.3051 11.5393 20.1078 11.4484C20.0955 11.4427 20.0833 11.4371 20.0712 11.4315L20 11.3987L19.9288 11.4315C19.9167 11.4371 19.9046 11.4427 19.8923 11.4483C19.695 11.5393 19.4755 11.6405 19.2844 11.6953C19.0719 11.7562 18.6787 11.8235 18.3176 11.5494C17.9687 11.2846 17.9162 10.9 17.9068 10.6874C17.8979 10.4877 17.9215 10.2443 17.9436 10.0177C17.9449 10.0046 17.9462 9.99152 17.9474 9.97855L17.959 9.85875L17.8861 9.77343C17.8776 9.76352 17.869 9.75354 17.8605 9.74352C17.7156 9.57429 17.5579 9.39002 17.4514 9.22083C17.3335 9.03351 17.1683 8.69552 17.2953 8.28684C17.425 7.86998 17.7612 7.68853 17.9722 7.60538C18.1576 7.53232 18.3926 7.47928 18.6035 7.43169C18.6166 7.42874 18.6296 7.42581 18.6424 7.4229L18.7269 7.40378L18.7756 7.3165C18.782 7.30496 18.7885 7.29334 18.795 7.28167C18.9041 7.08562 19.0228 6.87253 19.1439 6.71442ZM20.5938 10.6346C20.5938 10.6346 20.5938 10.6338 20.594 10.6324L20.5938 10.6346ZM8.68395 14.4482C10.5498 14.0867 12.5471 14.1678 14.1633 15.1318C14.3903 15.2672 14.6031 15.4359 14.7888 15.6444C15.1646 16.0666 15.3587 16.5913 15.3679 17.1174C15.5592 16.994 15.7508 16.857 15.9454 16.71L17.7526 15.3448C18.6572 14.6615 19.9718 14.6614 20.8765 15.3445C21.7124 15.9757 22.0457 17.1085 21.4473 18.0677C21.022 18.7495 20.3814 19.6924 19.7296 20.2962C19.0707 20.9065 18.1329 21.4196 17.4235 21.762C16.562 22.1778 15.6316 22.4077 14.7268 22.5541C12.8776 22.8534 10.9535 22.8076 9.12503 22.431C8.19062 22.2384 7.21958 22.1384 6.25997 22.1384H4.00004C3.58582 22.1384 3.25004 21.8026 3.25004 21.3884C3.25004 20.9742 3.58582 20.6384 4.00004 20.6384H6.25997C7.32208 20.6384 8.39451 20.749 9.4277 20.9618C11.0797 21.3022 12.8201 21.3432 14.4871 21.0734C15.3161 20.9392 16.0901 20.74 16.7715 20.4111C17.4549 20.0812 18.2233 19.6468 18.7103 19.1957C19.2028 18.7395 19.7541 17.9479 20.1746 17.2738C20.3016 17.0703 20.284 16.7767 19.9726 16.5416C19.6029 16.2624 19.0264 16.2625 18.6567 16.5417L16.8495 17.9069C16.1281 18.4518 15.2401 19.0349 14.1387 19.2106C14.0276 19.2283 13.9119 19.2445 13.7918 19.2588C13.7345 19.2692 13.6749 19.276 13.6133 19.2783C13.051 19.3342 12.3998 19.3472 11.6813 19.2793C11.2689 19.2404 10.9662 18.8745 11.0051 18.4621C11.0441 18.0497 11.4099 17.747 11.8223 17.786C12.4497 17.8452 13.0127 17.8321 13.4903 17.7831C13.4999 17.7821 13.5096 17.7811 13.5192 17.7801C13.5392 17.7685 13.5696 17.7474 13.6096 17.7125C13.9291 17.4336 13.9576 16.9667 13.6684 16.6418C13.5951 16.5595 13.5048 16.4856 13.3949 16.42C12.2138 15.7155 10.6363 15.5978 8.96925 15.9208C7.31172 16.2419 5.66494 16.9817 4.43389 17.8547C4.09602 18.0943 3.62787 18.0146 3.38826 17.6768C3.14865 17.3389 3.22831 16.8708 3.56618 16.6311C4.96454 15.6395 6.80863 14.8115 8.68395 14.4482Z" fill="currentColor"/>
    </IconBase>
))

HandStars.displayName = "HandStars"