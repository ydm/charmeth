#!/usr/bin/env python

import re
import shutil
import sys
from random import random, randint


randombyte = lambda: randint(0x2f, 0xaf)


def hexcolor() -> str:
    ans = '#'
    for _ in range(3):
        ans += '{:02x}'.format(randombyte())
    return ans


def rgbacolor() -> str:
    return 'rgba({}, {}, {}, {:.2})'.format(
        randombyte(),
        randombyte(),
        randombyte(),
        .5 + random() * .5,
    )


def main():
    fn = sys.argv[1]
    out = []
    with open(fn, 'r', encoding='utf-8') as f:
        for line in f:
            line = re.sub(r'#[\da-f]{6}', hexcolor(), line)
            line = re.sub(
                r'rgba\s*\((?:\d+\s*,\s*){3}\d*(?:\.\d*)\s*\)',
                rgbacolor(),
                line,
            )
            out.append(line)

    ans = ''.join(out)
    shutil.move(fn, f'{fn}.bak')
    with open(fn, 'w', encoding='utf-8') as f:
        f.write(ans)


if __name__ == '__main__':
    main()