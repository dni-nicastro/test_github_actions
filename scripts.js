import http from 'k6/http';
import {check, sleep } from 'k6';

export default function () {
    http.get('http://test.k6.io');
    sleep(1);

    let res = http.get('http://test.k6.io');
    check(res, { 'status was 200': r => r.status === 200 });
    sleep(1);
}
