import http from 'k6/http';
import {check} from 'k6';

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 1,
            timeUnit: '4s',
            duration: '3m',
            preAllocatedVUs: 20,
            maxVUs: 100,
        },
    },
};

export default function () {
    const res = http.get('http://service-a:9501/trace/internal-api');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
};