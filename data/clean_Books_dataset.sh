#!/usr/bin/env bash
# cleans Books dataset to only valid ISBN numbers

head -n 24 BX-Books.sql > Books.sql
grep -E "VALUES \('[[:digit:]]{9}X'," BX-Books.sql >> Books.sql
grep -E "VALUES \('[[:digit:]]{10}'," BX-Books.sql >> Books.sql
grep -E "VALUES \('978[[:digit:]]{10}'," BX-Books.sql >> Books.sql
grep -E "VALUES \('979[[:digit:]]{10}'," BX-Books.sql >> Books.sql
