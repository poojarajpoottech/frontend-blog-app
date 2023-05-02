import { m } from 'framer-motion';

import { Container, Typography, Box } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';

export default function AboutMe() {
  return (
    <Container component={MotionViewport} sx={{ mt: 5 }}>
      <Box sx={{ mb: 4, mt: 4 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            &quot;Who has influenced you the most in life and why?&quot;
          </Typography>
        </m.div>
        <Typography variant="subtitle2" sx={{ textAlign: 'center', mx: 'auto' }}>
          I am a self-motivated person but mostly I am influenced by Mr. Ratan Tata Sir. He Is my
          inspiration and I have learned so many things from him like compassion and helping others
          attitude.
        </Typography>
      </Box>
      <Box sx={{ mb: 4, mt: 4 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            What are the biggest challenges you have faced in your life & how did you overcome them?
          </Typography>
        </m.div>
        <Typography variant="subtitle2" sx={{ textAlign: 'center', mx: 'auto' }}>
          I come from a very small town called Gadhi Chandpur in Banda, Uttar Pradesh. I was the
          first boy in my society to become a software engineer in Bengaluru. This is the story of
          how I went from a small village to becoming a software engineer in Bangalore. It all
          started when I was in the 9th grade. I remember the day when I went to Pt. JN Inter
          College Girwan to take my exams. I saw a girl sitting in front of me and fell in love with
          her. I thought that I would marry her someday. However, after a few months, I found out
          that she did not even study in that college. I did not know her name or where she lived.
          Time passed slowly, but one day, a classmate told me that there was a girl from my village
          who lived nearby and was a very good girl. She did not even look at any other guy. I
          thought to myself that maybe she was the same girl I saw during the exams, and I had
          fallen in love with her. I remember when I used to go for coaching, I passed through her
          village and saw her for the first time. I was very happy and felt good about it, but I was
          wondering how to start a conversation with her because I didn&apos;t have the courage to
          talk to her. However, there was a girl from her village who studied in my college. I asked
          her if there was a girl named Pooja living in her village, to which she replied &quot;Yes,
          she is my friend&quot;. She asked me why I wanted to know about that girl, and I said I
          was just asking. After some time, Mahima gave me a letter and said that Pooja had given it
          to her. I still remember everything written in that letter, and I was very happy about it.
          I replied to that letter and gave it back to Mahima, who then gave it to Pooja. After some
          time, Mahima told me that she had not actually given the letter to Pooja, and that I had
          written it myself. I asked her why she did that, and she said that she knew I loved that
          girl, and that&apos;s why she gave me the letter. That&apos;s how our conversation
          started, and we were both very happy. Everything was going well with time. As time passed,
          three years had already passed in our love story. Many people had come to know about it,
          including her family. They had started looking for a suitable match for her. At that time,
          we were both around 16-17 years old. Her father kept looking for a match, but she kept
          refusing them. From then on, our lives were full of sorrow, and we stopped talking for a
          year. We didn&apos;t see each other for a year. After one year, I called her, and that
          day, she cried so much as if it were raining heavily. Then we started talking again.
          Slowly, her family also became aware that Pooja wanted to marry the same boy she loved.
          But her family agreed on one condition that she would have to work. When such things were
          being discussed in the family, I had just passed my 12th grade with an art background. Now
          the real problem was that I knew that our marriage could never happen until I got a job.
          So, I started thinking about what to do after the 12th grade. My family advised me to
          pursue law and become a lawyer. However, it was just a thought. Then, my friend suggested
          that I should do BCA because there would be a huge scope for computers in the future. We
          both agreed to do this course together, I was the only one among my friends who could
          afford to pursue a BCA degree, as my friend didn&apos;t have enough money. He ended up
          doing a BA degree, and things were going well for both of us. However, after I completed
          my BCA in 2019, my friend&apos;s family started questioning when I would get a job. They
          thought I wasn&apos;t motivated enough and began taunting me, along with other guys like
          me. One day, a college friend told me that his elder brother was a software engineer
          working in Hyderabad. I took his brother&apos;s number and spoke to him, and he advised me
          to come to Hyderabad for training and job search. It wasn&apos;t easy convincing my
          family, who had never sent anyone so far away for education. But I gathered courage and
          convinced my father, who eventually agreed. In Hyderabad, I received training in all
          programming languages and completed it within a year. I then began searching for a job in
          Bangalore, but unfortunately, the pandemic hit, and all interviews got canceled. Luckily,
          I got a work-from-home job at a startup called ZMZ Technologies Limited during the
          lockdown. After working there for two years, I left to join TITAN Company on March 29,
          2022. On May 24, 2022, I got married to the girl I loved, and we now live happily together
          in Bangalore. Her family is also thrilled.
        </Typography>
      </Box>
      <Box sx={{ mb: 4, mt: 4 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            &quot;How to deal with difficulties - An inspiring story&quot;
          </Typography>
        </m.div>
        <Typography variant="subtitle2" sx={{ textAlign: 'center', mx: 'auto' }}>
          This is an inspiring story of how hard work, perseverance, and the power of love can
          overcome all obstacles. Despite facing numerous challenges, this individual never gave up
          and continued to pursue their dreams. They used their passion for computers to carve a
          successful career in software engineering, despite hailing from a small village.This story
          is a great example for those who may be struggling to find their path or are facing
          obstacles in their own lives.
        </Typography>
      </Box>
    </Container>
  );
}
