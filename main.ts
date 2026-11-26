// u-mfnakmal-the-comment-above-the-code-35e38026: one honest comment, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(dir, 'entry.txt'), '// Dave swore this timezone workaround would hold until we migrated off Heroku in 2019.');