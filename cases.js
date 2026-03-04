// Vice Harbor P.D.: The Return - Complete Case Data
// Import this before game.js or merge with game.js

const CASE_DATA = [
    {
        id: 1,
        title: 'THE MISSING HEIRLOOM',
        number: 'CASE #1',
        date: 'DAY 1 • MORNING',
        briefing: `A priceless diamond necklace has been stolen from the Vanderbilt estate. The theft occurred during a private charity gala. The victim, Margaret Vanderbilt, discovered the necklace missing from her safe around 2 AM. Four people had access to the vault that night.`,
        location: 'Vanderbilt Estate - Master Bedroom',
        victim: 'Margaret Vanderbilt',
        timeOfDeath: '2:00 AM',
        sceneItems: [
            { 
                name: 'Empty Safe', 
                description: 'The safe door is open. Clean, precise cut around the lock mechanism. Professional work.',
                forensicAnalysis: 'The lock shows evidence of thermal cutting equipment. Burn marks suggest industrial-grade torch used. The cut was made with surgical precision, taking approximately 8-12 minutes. This suggests someone with professional training.',
                connections: ['Victor Chen has locksmith certification from 2018', 'James Blackwell worked in industrial maintenance before estate management', 'Rope suggests rappelling expertise - military or professional background']
            },
            { 
                name: 'Security Camera', 
                description: 'The camera has been disabled. Looks like someone knew exactly how to bypass it.',
                forensicAnalysis: 'The camera was disabled via the control panel, not cut from the outside. This means someone accessed the security room. The panel shows signs of tampering - someone knew the backup power location. The disable happened at exactly 1:47 AM based on the timestamp log.',
                connections: ['Sophie Chen has keycard access to security room', 'Security control password found in James Blackwell\'s office', 'Camera disabled 13 minutes before theft began']
            },
            { 
                name: 'Muddy Footprints', 
                description: 'Small footprints leading from the safe to the window. Size 6 or 7 shoes.',
                forensicAnalysis: 'Footprint analysis reveals size 6.5 shoe - consistent with either a small male or female frame. The mud is from the garden outside, but forensics shows a rare mineral composition found only in landscaping near the service entrance. The person wore Vibram outsole hiking boots - professional grade.',
                connections: ['Sophie Chen wears size 6 shoes (confirmed from gala photos)', 'Service entrance was used - someone familiar with estate layout', 'Vibram boots found in Chen\'s apartment during search warrant']
            },
            { 
                name: 'Rope and Grappling Hook', 
                description: 'Professional grade climbing equipment left near the window. Recently used.',
                forensicAnalysis: 'The rope is commercial climbing line, date manufactured 6 months ago. The grappling hook shows recent usage - metal shows minimal oxidation. Fingerprint analysis reveals two sets: one matches the database, one is unknown. The rope has friction burns consistent with the weight of an adult male, approximately 180-200 lbs.',
                connections: ['Victor Chen weighs 195 lbs', 'Rope purchased from sporting goods store - paid in cash but caught on security camera', 'Unknown fingerprints match someone with criminal background - must belong to hired professional', 'Rope knots use technique taught in military: suggests military training']
            }
        ],
        suspects: [
            { 
                name: 'Victor Chen', 
                role: 'Former Security Guard', 
                motive: 'Fired last month for "misconduct" - actually caught by Blackwell taking kickbacks', 
                background: 'Ex-military (2005-2010), locksmith trained, knows all codes and patrol routes',
                alibi: 'Claims he was at home, but his apartment is only 2 blocks away. No witnesses.',
                interrogationResponses: {
                    'Where were you between 1:45 and 2:15 AM?': { answer: 'Home, sleeping. My roommate was asleep too.', demeanor: 'Nervous, won\'t make eye contact' },
                    'Can you explain the Vibram boots found in your apartment?': { answer: 'I use them for hiking on weekends. That\'s not a crime.', demeanor: 'Defensive' },
                    'Why were you fired from the Vanderbilt estate?': { answer: 'Blackwell wanted to frame me. I caught him taking money from petty cash.', demeanor: 'Angry' },
                    'Your military training included rope work and lock picking?': { answer: 'Yeah, but so did a thousand other soldiers. That doesn\'t mean anything.', demeanor: 'Increasingly agitated' }
                }
            },
            { 
                name: 'Isabella Rossi', 
                role: 'Jewelry Appraiser', 
                motive: 'Deep gambling debts - owes $300k to crime figures', 
                background: 'Italian national, worked for Vanderbilt for 5 years, has connections to organized crime',
                alibi: 'Was at the gala until 1:30 AM, then left in a taxi. Driver confirms.',
                interrogationResponses: {
                    'You have significant gambling debts. How much do you owe?': { answer: 'I don\'t know what you\'re talking about.', demeanor: 'Cold, calculated' },
                    'We know you provided the vault code to someone. Who?': { answer: 'I never gave anyone codes. That\'s insane.', demeanor: 'Maintains composure' },
                    'The necklace was appraised by you 2 weeks ago. You know exactly what it\'s worth.': { answer: 'My job is to appraise. Many people know the value.', demeanor: 'Unflinching' },
                    'Who are your associates in Atlantic City?': { answer: 'I have no idea what you mean.', demeanor: 'Looks away briefly - first sign of concern' }
                }
            },
            { 
                name: 'James Blackwell', 
                role: 'Estate Manager', 
                motive: 'Blackmailed for years - financial records show payments to unknown account', 
                background: 'Former industrial maintenance manager, extensive technical knowledge, controls all codes and access',
                alibi: 'Was in the guest house, claims no one saw him after 11 PM',
                interrogationResponses: {
                    'Why are there regular payments to an unknown account from your personal funds?': { answer: 'Investments. It\'s private.', demeanor: 'Evasive' },
                    'The security system was disabled from the control panel. You\'re the only one with regular access.': { answer: 'Several people know the code.', demeanor: 'Shifts in seat' },
                    'We found draft emails about disabling cameras. You were drafting them.': { answer: 'That was months ago. I was testing security weaknesses.', demeanor: 'Contradicts self - claim is unraveling' },
                    'Sophie Chen has been asking you for security codes. What for?': { answer: 'She never asked me. You\'re twisting things.', demeanor: 'Agitated' }
                }
            },
            { 
                name: 'Sophie Chen', 
                role: 'Maid', 
                motive: 'Cousin of fired guard - shares his resentment toward Blackwell', 
                background: 'Works as maid for 3 years, had access to all areas, familiar with routines',
                alibi: 'Was in servant quarters. Claims she went to bed at 10 PM.',
                interrogationResponses: {
                    'Your cousin Victor was fired unfairly. That must anger you.': { answer: 'It\'s unfair, yes. But I had nothing to do with any theft.', demeanor: 'Sympathetic, but controlled' },
                    'You have security card access to the control room. Why?': { answer: 'For cleaning. The room needs maintenance.', demeanor: 'Too rehearsed answer' },
                    'We found your fingerprints near the security panel. When were you there?': { answer: 'I clean that room regularly. It\'s my job.', demeanor: 'Defensive' },
                    'You were seen on servant entrance camera at 1:52 AM. You told us you were in bed.': { answer: '... I went for a walk. Couldn\'t sleep.', demeanor: 'Caught in lie, now nervous' }
                }
            }
        ],
        correctSuspect: 0,
        reveal: 'Victor Chen orchestrated the theft. He used his military training and locksmith skills to cut open the safe. His cousin Sophie helped by disabling the camera from the security room - she had legitimate access. James Blackwell is being blackmailed (perhaps by the crime family) but didn\'t directly participate. Isabella Rossi is innocent, but her gambling debts make her a convenient distraction. The necklace is being moved through fencing channels. This appears to be mob-connected work.'
    },
    
    {
        id: 2,
        title: 'THE POISONED JOURNALIST',
        number: 'CASE #2',
        date: 'DAY 2 • AFTERNOON',
        briefing: `Local investigative journalist Thomas Webb found dead at his desk. The cause: cyanide poisoning in his morning coffee. Thomas had been investigating corruption in City Hall - and he was close to publishing his findings. Someone wanted him silenced. Four suspects had opportunity.`,
        location: 'Vice Harbor Gazette - Editor\'s Office',
        victim: 'Thomas Webb',
        timeOfDeath: '8:30 AM',
        sceneItems: [
            { 
                name: 'Poisoned Coffee Cup', 
                description: 'Empty coffee cup on the desk. Residue tests positive for cyanide.',
                forensicAnalysis: 'Toxicology analysis shows cyanide concentration of 8mg - lethal dose. The poison was added to the cup after brewing, not in the pot itself. The coffee was prepared at 8:05 AM and consumed around 8:25 AM. Death occurred within 3 minutes. The poison required professional-grade access.',
                connections: [
                    'Patricia Morse has access to cleaning supplies including chemical agents',
                    'Elena Rossi handles Thomas\'s coffee every morning',
                    'Alderman Mitchell was seen entering the office at 8:00 AM',
                    'David Park was working at his desk only 20 feet away'
                ]
            },
            { 
                name: 'Investigation Files', 
                description: 'Detailed notes on City Hall corruption spanning 8 months.',
                forensicAnalysis: 'Files contain damning evidence: Jack Mitchell received $500k from shell corporations, Sandra Cho falsified zoning reports for bribes, Robert Hayes accepted $300k payments. Final article was scheduled for tomorrow\'s edition. The scope of corruption is massive - potentially involving organized crime. Someone high up wanted this silenced permanently.',
                connections: [
                    'Alderman Jack Mitchell has most to lose - $500k exposure',
                    'Mitchell\'s name appears 47 times in the files',
                    'Files mention "connection to Viktor V." - organized crime link',
                    'Article would trigger federal investigation'
                ]
            },
            { 
                name: 'Appointment Book', 
                description: 'Daily planner shows "J.M. - 8:00 AM - URGENT - FINAL EVIDENCE"',
                forensicAnalysis: 'The appointment was written in Thomas\'s hand but the entry shows stress indicators. Security camera footage confirms someone entered at 7:58 AM matching Mitchell\'s build and height. The camera mysteriously stops recording from 7:55-8:05 AM - exactly during the appointment window. This suggests the person knew how to disable it.',
                connections: [
                    'J.M. = Jack Mitchell or James Mitchell (no James in database)',
                    'Mitchell has building access as councilman',
                    'Camera tampering requires technical knowledge',
                    'Meeting time places Mitchell at scene during critical window'
                ]
            },
            { 
                name: 'Anonymous Threatening Letter', 
                description: 'Letter received 3 days ago: "Stop digging or pay the price. This is your final warning."',
                forensicAnalysis: 'Letter printed on standard paper, no fingerprints. Postmark from Vice Harbor central office. Handwriting analysis suggests educated person attempting disguise. The phrase "pay the price" is specific - suggests someone comfortable with threats or violence. Expensive cologne residue detected - suggests high-income individual.',
                connections: [
                    'Cologne brand matches Mitchell\'s known preference',
                    'Phrasing suggests organized crime involvement',
                    'Letter sent by someone aware of investigation scope',
                    'Mitchell has resources to hire killers'
                ]
            }
        ],
        suspects: [
            { 
                name: 'Patricia Morse', 
                role: 'Coffee Shop Owner', 
                motive: 'Her business practices were exposed in Thomas\'s investigation - health code violations and tax evasion', 
                background: 'Runs "The Daily Grind" for 8 years. Nervous about losing business. Has chemical knowledge from cleaning supplies.',
                alibi: 'Claims she was at her shop. Several customers confirm seeing her.',
                interrogationResponses: {
                    'You prepared Thomas Webb\'s coffee this morning. Opportunity is there.': { answer: 'I prepare coffee for 50 customers a day. Elena picked it up at 8 AM and took it to him. She\'s the one with real access.', demeanor: 'Defensive, pointing fingers' },
                    'Thomas\'s investigation exposed health violations at your shop. That must have made you angry.': { answer: 'Yeah, I was angry. His facts were wrong. But I wouldn\'t kill someone over a bad article. That\'s crazy.', demeanor: 'Defensive but logical' },
                    'You have access to cyanide through your shop\'s cleaning supplies.': { answer: 'No, I don\'t. I don\'t keep poison. I keep food-safe cleaners. Check my inventory.', demeanor: 'Confident, truthful' },
                    'Can your employees confirm you never left the shop?': { answer: 'Sarah and Mike were there the whole time. Ask them. I didn\'t leave.', demeanor: 'Calm, cooperative' }
                }
            },
            { 
                name: 'Alderman Jack Mitchell', 
                role: 'City Council Member', 
                motive: 'Corruption exposure would end his 12-year career, destroy his reputation, trigger federal charges', 
                background: 'Councilman for 12 years. Well-connected in politics and organized crime. Has mob connections for protection.',
                alibi: 'Claims he had breakfast at home, then went to city hall. No witnesses.',
                interrogationResponses: {
                    'You had a private meeting with Thomas Webb at 8:00 AM. What was discussed?': { answer: 'I never met with him. That\'s a lie. I don\'t even know what you\'re talking about.', demeanor: 'Immediate denial, nervous' },
                    'Security footage shows you entering his building at 7:58 AM. Then the camera mysteriously stops working.': { answer: '...That must be coincidence. The camera malfunction wasn\'t me.', demeanor: 'Caught off guard, stammering' },
                    'Your investigation exposure would cost you everything. Your career, freedom, reputation.': { answer: 'I have nothing to hide. My finances are legitimate political contributions.', demeanor: 'Defensive, unconvincing' },
                    'We found threatening letters you wrote. "Pay the price."': { answer: 'I never wrote anything like that! That\'s... that\'s not my handwriting.', demeanor: 'Angry, defensive, too emotional' }
                }
            },
            { 
                name: 'Elena Rossi', 
                role: 'Administrative Assistant', 
                motive: 'Blackmailed by Mitchell - he threatened to expose her affair with Councilman Hayes', 
                background: 'Administrative assistant. Lives with long-term partner. Secret relationship with city official.',
                alibi: 'Picked up coffee at 8:00 AM, delivered to office at 8:10 AM. No one saw her leave the office.',
                interrogationResponses: {
                    'You delivered the poisoned coffee to Thomas\'s desk. You had the perfect opportunity.': { answer: 'I just picked up the coffee and brought it to him. It was fine when I got it. I didn\'t do anything to it!', demeanor: 'Nervous, defensive' },
                    'Alderman Mitchell has been blackmailing you about your relationship with Councilman Hayes.': { answer: '*Face goes pale* How... how do you know that? Yes, okay, he knew. He was threatening to tell my partner.', demeanor: 'Breaks down, admits to blackmail' },
                    'Mitchell told you to poison the coffee, didn\'t he?': { answer: 'No! No, he just... he said if the article didn\'t get published, things would be better for me. He never said how. I thought maybe Thomas would just... pull the article.', demeanor: 'Crying, clearly not the killer' },
                    'What exactly did Mitchell say to you?': { answer: 'He said if I could "delay" things, he\'d keep quiet about my personal life. He gave me an envelope with $5,000 cash. But I swear I didn\'t poison anyone. The coffee was fine when I took it to Thomas.', demeanor: 'Truthful - accomplice but not killer' }
                }
            },
            { 
                name: 'David Park', 
                role: 'Competing Freelance Journalist', 
                motive: 'Wanted Thomas\'s corruption story for himself - would be career-making exclusive', 
                background: 'Freelance journalist. Struggling for major break. Competed with Thomas for stories.',
                alibi: 'Working at shared office desk, 20 feet from Thomas\'s office. Was there the whole time.',
                interrogationResponses: {
                    'You and Thomas competed for stories. His corruption investigation would have made his career.': { answer: 'Yeah, we competed. He was better at getting sources than me. But I didn\'t kill him over it.', demeanor: 'Honest admission' },
                    'If Thomas died, you could access his investigation files and scoop the story yourself.': { answer: '*Pauses* That\'s... true. I didn\'t think of it that way. But I didn\'t do it. When he died, I was shocked.', demeanor: 'Caught off-guard by the implication' },
                    'You have access to the office. You could have poisoned the coffee.': { answer: 'I saw people coming and going all morning. Lots of people had access. I was at my desk working on a different story.', demeanor: 'Defensive but reasonable' },
                    'Did Thomas ever confide in you about how close he was to publishing?': { answer: 'He mentioned it was big. Said it would "change everything in this city." But he wouldn\'t give details - worried I\'d scoop him. I\'m freelance, after all.', demeanor: 'Truthful, cooperative' }
                }
            }
        ],
        correctSuspect: 1,
        reveal: 'Alderman Jack Mitchell orchestrated the murder. He used Elena Rossi, blackmailing her into helping by threatening to expose her affair. Mitchell obtained cyanide through his organized crime connections and poisoned the coffee during his 8:00 AM meeting with Thomas - a confrontation where he tried to convince Thomas to kill the story. When Thomas refused, Mitchell added the poison to his cup. He also disabled the security camera using his building access knowledge. Elena was manipulated into compliance through blackmail but didn\'t directly participate in the murder. Patricia Morse and David Park are innocent. As Mitchell is arrested, he makes a chilling statement: "You think you\'re smart? This goes much higher than me. The Volkovs won\'t let this stand."'
    },

    {
        id: 3,
        title: 'FACTORY EXPLOSION',
        number: 'CASE #3',
        date: 'DAY 3 • EVENING',
        briefing: `A massive explosion at Nexus Manufacturing has killed the facility director and two workers. 47 people injured. Initial investigation reveals critical safety systems were deliberately disabled hours before the blast. The facility was undergoing federal audit for suspected money laundering. Someone wanted to destroy evidence - and didn't care who died.`,
        location: 'Nexus Manufacturing - Control Room',
        victim: 'Derek Voss (Facility Director)',
        timeOfDeath: '5:45 PM',
        sceneItems: [
            { 
                name: 'Severed Electrical Cables', 
                description: 'Primary and backup safety shutdown systems cut with precision. Done by someone with electrical expertise.',
                forensicAnalysis: 'Both safety systems were disabled, requiring knowledge of both systems. The cables were cut with professional bolt cutters - red paint transfer matches high-grade equipment. The cuts were made 3-4 hours before the explosion, suggesting planned timing. Person was calm and methodical - not rushed.',
                connections: [
                    'Marcus Cole is a trained electrician with access to tools',
                    'Rachel Storm is an electrical engineer - understands both systems',
                    'Dmitri Volkov has access to professional equipment',
                    'Only 3 people know how both systems work'
                ]
            },
            { 
                name: 'Marked Blueprints', 
                description: 'Facility blueprints marked with red X\'s at critical failure points.',
                forensicAnalysis: 'Each X marks a location that, if damaged, would create cascading explosions. The marks show someone studied the facility design carefully. Red pen matches engineering department supplies. Blueprints were copied recently - indicates pre-planning. This wasn\'t spontaneous - it was engineered.',
                connections: [
                    'Engineering office blueprints kept in locked cabinet',
                    'Rachel Storm and Marcus Cole have regular access',
                    'Copies made on facility printer - can trace user access logs',
                    'Pattern of X\'s requires engineering knowledge'
                ]
            },
            { 
                name: 'Access Logs - Night Before', 
                description: 'Three people logged in after hours: Marcus Cole (11:47 PM), Dmitri Volkov (12:34 AM), Rachel Storm (1:15 AM)',
                forensicAnalysis: 'All three were present during hours when safety systems should be offline. Marcus Cole has legitimate facility keys and was present during installation phase. Dmitri Volkov entered with badge but rarely uses it - suspicious late-night visit. Rachel Storm used restricted side entrance at 1:15 AM - entry logged but no work order explaining why.',
                connections: [
                    'Marcus Cole: Facilities manager, legitimate access',
                    'Dmitri Volkov: Logistics coordinator with facility badge, no reason to be there',
                    'Rachel Storm: Safety inspector, would need legitimate reason for late access',
                    'Coordination suggests planning between multiple people'
                ]
            },
            { 
                name: 'Burned Audit Documents', 
                description: 'Partially burned federal audit reports showing financial crimes.',
                forensicAnalysis: 'Documents dated 2 weeks before explosion. Despite burning attempts, fragments reveal: money missing from maintenance budget, fake work orders, shell company payments. Burning happened in facility furnace set to high temperature - deliberate attempt to destroy evidence. Someone knew the furnace location and operation.',
                connections: [
                    'Audit showed $2.3 million in unexplained payments',
                    'Marcus Cole manages maintenance budget - could authorize fake invoices',
                    'Dmitri Volkov coordinates all payment movements',
                    'Burning evidence suggests panic about federal investigation'
                ]
            }
        ],
        suspects: [
            { 
                name: 'Marcus Cole', 
                role: 'Facilities Manager', 
                motive: 'Facility closure would eliminate evidence of financial crimes he helped coordinate - money laundering scheme',
                background: 'Facilities manager for 6 years. Former electrician. Controls all maintenance operations and budget.',
                alibi: 'Was working late on "routine maintenance." No specific task records.',
                interrogationResponses: {
                    'You were in the facility at 11:47 PM the night before the explosion. Why?': { answer: 'Routine maintenance checks. The facility runs 24/7. I do late-night inspections.', demeanor: 'Rehearsed answer' },
                    'Audit documents show you authorized payments that don\'t match actual work. Where did that money go?': { answer: 'I... contractors submit invoices. I process them. It\'s not my job to verify everything.', demeanor: 'Nervous, clearly knows something' },
                    'The safety cables were cut by someone with electrical expertise. You have that background.': { answer: 'So do dozens of electricians. Cutting wires doesn\'t mean anything.', demeanor: 'Defensive' },
                    'We found traces of your fingerprints on the furnace door where documents were burned.': { answer: 'I touch that furnace all the time. For maintenance. That... that proves nothing.', demeanor: 'Cracking under pressure, struggling for answers' }
                }
            },
            { 
                name: 'Rachel Storm', 
                role: 'Safety Inspector', 
                motive: 'Her safety report would force facility closure, exposing the laundering operation and destroying Volkov\'s operation',
                background: 'Safety inspector for 3 years. Electrical engineer. Discovers violations constantly.',
                alibi: 'Claims she wasn\'t at the facility. Access logs prove her wrong.',
                interrogationResponses: {
                    'Access logs show you used your badge at 1:15 AM through the restricted entrance. You told us you were home.': { answer: 'That\'s... I was home. That must be an error. The system has glitches.', demeanor: 'Caught in lie, panicking' },
                    'Your safety report was going to recommend closure. That would stop ongoing federal investigation.': { answer: 'I report safety violations. My job is safety, not politics.', demeanor: 'Deflecting, aggressive' },
                    'With your engineering background, you could disable both safety systems simultaneously.': { answer: 'Anyone trained in electrical systems could do it. This is circumstantial.', demeanor: 'Increasingly hostile' },
                    'Security cameras show you accessing the control room at 1:23 AM. What were you doing?': { answer: '*Long silence* I was... investigating something. But I didn\'t sabotage anything. I swear.', demeanor: 'Breaking down, clearly frightened' }
                }
            },
            { 
                name: 'Dmitri Volkov', 
                role: 'Logistics Coordinator', 
                motive: 'Facility was critical to organized crime money laundering. Federal audit threatened everything. Orders came from above to destroy evidence.',
                background: 'Logistics coordinator for 2 years. Actually works for Viktor Volkov crime family.',
                alibi: 'Claims he wasn\'t at the facility. Access logs show he was.',
                interrogationResponses: {
                    'Your badge shows entry at 12:34 AM with no scheduled work order. Why?': { answer: 'Equipment shipments sometimes arrive at night. I check on deliveries.', demeanor: 'Calm, controlled, unsettling' },
                    'You work for the Volkov crime family. This facility laundered mob money.': { answer: 'I have no idea what you\'re talking about.', demeanor: 'Refuses to engage, emotionless' },
                    'The federal audit was exposing $2.3 million in unexplained payments. Your organization ordered the sabotage.': { answer: 'I have nothing more to say. Get me a lawyer.', demeanor: 'Completely shuts down' },
                    'People died in that explosion. Two workers were killed. Does that matter to you?': { answer: '*Silence - stares ahead with cold eyes* I\'m not answering anything else.', demeanor: 'Cold, dangerous, shows no remorse' }
                }
            },
            { 
                name: 'Sandra Kim', 
                role: 'Financial Controller', 
                motive: 'Her own embezzlement ($200k over 2 years) would be discovered when federal audit was completed',
                background: 'Financial controller for 4 years. Quietly stealing from the company.',
                alibi: 'Was home with her family.',
                interrogationResponses: {
                    'Audit documents show $200,000 missing from safety equipment budget. Where is that money?': { answer: 'Those are accounting errors. These things happen with large operations.', demeanor: 'Evasive' },
                    'Your embezzlement would have been discovered when the audit was complete. You had motive to stop it.': { answer: 'I didn\'t sabotage anything. I was at home with my family.', demeanor: 'Truthful - not involved in sabotage' },
                    'Can anyone confirm your whereabouts?': { answer: 'My husband and daughter were there. They were sleeping, so they don\'t know if I left briefly.', demeanor: 'Honest admission' },
                    'Did anyone at the facility ask you to help cover up financial crimes?': { answer: 'No. I was just... taking money. I didn\'t know about the other stuff. When the explosion happened, I was terrified.', demeanor: 'Truthful, guilty of theft but not sabotage, realizing she was being used' }
                }
            }
        ],
        correctSuspect: 2,
        reveal: 'Dmitri Volkov orchestrated the sabotage on direct orders from Viktor Volkov. The facility was essential to the crime family\'s money laundering - $2.3 million per month moved through false invoices. When federal auditors scheduled their final review, Viktor ordered the destruction of evidence and the facility. Dmitri coordinated with Marcus Cole (who disabled the electrical systems) and Rachel Storm (who provided engineering knowledge and facility blueprints). Sandra Kim\'s embezzlement was unrelated - she was caught in the middle and will face separate charges. As Dmitri is arrested, he refuses to cooperate but intelligence gathered suggests Viktor Volkov is far more powerful than previously thought. This wasn\'t just about protecting a single facility - it\'s part of a sprawling criminal empire with multiple operations. The Volkov organization is bigger and more organized than anyone realized.'
    },

    {
        id: 4,
        title: 'THE MILLION-DOLLAR HEIST',
        number: 'CASE #4',
        date: 'DAY 4 • NIGHT',
        briefing: `A $50 million shipment of rare artwork and artifacts vanished from Vice Harbor Port Authority. The truck was armored, the delivery route was secret, and only five people knew about it. The cargo was destined for auction at an exclusive gallery. The theft shows sophisticated planning - someone knew security procedures, timing, and how to bypass every checkpoint.`,
        location: 'Port Authority - Secured Storage Facility',
        victim: 'The Shipment - $50 Million in Art and Artifacts',
        timeOfDeath: '11:00 PM',
        sceneItems: [
            { 
                name: 'Container Lock Bypass Evidence', 
                description: 'Shipping container opened from the inside without forced entry. Customs seal was carefully removed and replaced.',
                forensicAnalysis: 'Lock was bypassed using someone with knowledge of customs procedures. No forced entry - seal was delicately removed by someone who knew exactly what they were doing. The container was accessed AFTER reaching storage facility, suggesting inside coordination. Security cameras show someone with legitimate access badge using the container.',
                connections: [
                    'Container opened from inside - not forced from outside',
                    'Legitimate access badge was used - narrows suspects to facility employees',
                    'Knowledge of customs procedures - must be port authority employee',
                    'Timing suggests planned coordination'
                ]
            },
            { 
                name: 'Modified Guard Schedule', 
                description: 'Night guard wasn\'t on duty. Schedule was changed in facility computer system.',
                forensicAnalysis: 'Schedule was modified at 3:45 PM - 7 hours before theft. Modified using Andrea Mercer\'s login credentials, but IT confirms Andrea was in meetings during this time. Someone accessed her credentials. The modification removed primary guard AND his backup, leaving 1-hour window with NO security presence. This required inside knowledge of security protocols.',
                connections: [
                    'Andrea Mercer\'s credentials were compromised',
                    'Someone had IT access to modify systems',
                    '1-hour window matches theft timeframe exactly',
                    'Shows detailed knowledge of security procedures'
                ]
            },
            { 
                name: 'Disabled Tracking Device', 
                description: 'Military-grade tracking device was removed from shipment packaging with surgical precision.',
                forensicAnalysis: 'Device is worth $15,000 and shows professional removal. Person knew exactly what they were looking for and how to find it. Removal required knowledge of customs packaging procedures. Device was disabled, not destroyed - person wanted to ensure it wouldn\'t transmit location but wanted to avoid immediate alerts.',
                connections: [
                    'Military-grade equipment suggests organized crime involvement',
                    'Knowledge of customs procedures points to insider',
                    'Leo Santos has military background - would understand tracking devices',
                    'Katherine Price deals with tracking procedures as customs inspector'
                ]
            },
            { 
                name: 'Forged Delivery Receipt', 
                description: 'Receipt signed by "A. Mercer" - but Andrea Mercer claims she didn\'t sign it.',
                forensicAnalysis: 'Signature is skilled forgery matching Andrea\'s style closely but with three minor deviations. Forger had access to samples of Andrea\'s real signature. Receipt was logged at 11:23 PM - exactly when the 1-hour guard gap occurred. Suggests the theft was meticulously timed.',
                connections: [
                    'Signature is forged - someone impersonated Andrea',
                    'Forger had access to her signature samples',
                    'Timing coordinated with guard schedule gap',
                    'Leo Santos and Katherine Price both handle paperwork'
                ]
            }
        ],
        suspects: [
            { 
                name: 'Andrea Mercer', 
                role: 'Port Authority Supervisor', 
                motive: 'Was about to be fired for poor security practices. Needed money before job loss.',
                background: 'Supervisor for 6 years. Recently under investigation for negligence. Desperate for money.',
                alibi: 'Was at home during the theft.',
                interrogationResponses: {
                    'Your credentials were used to modify the guard schedule. Explain that.': { answer: 'Someone hacked my login. I don\'t know how, but it wasn\'t me. I was home that night.', demeanor: 'Defensive but concerned' },
                    'Your signature appears on the delivery receipt for the stolen cargo.': { answer: 'That\'s not my signature. Look at my real writing - see these flourishes? The forged one doesn\'t have them. It\'s a fake.', demeanor: 'Shows genuine writing sample - clearly different from forgery' },
                    'You were about to be fired. You needed money.': { answer: 'Yeah, I needed money. But stealing $50 million of art? I\'m not insane. That\'s a federal crime.', demeanor: 'Logical, appears innocent' },
                    'Can anyone confirm you were home?': { answer: 'My roommate was asleep. I was alone. But I didn\'t do this.', demeanor: 'Unfortunate but truthful' }
                }
            },
            { 
                name: 'Leo Santos', 
                role: 'Armored Truck Driver', 
                motive: 'FBI informant turned double agent. Approached by Volkov family with $5 million offer to coordinate heist.',
                background: 'Truck driver for 4 years. Military background (combat engineer). High-level security clearance.',
                alibi: 'Was driving the truck - legitimate driver for the delivery.',
                interrogationResponses: {
                    'You drove the armored truck. You knew the route, the timing, the security procedures.': { answer: 'The truck never left my sight. The cargo was secure during transport. What happens after at the storage facility isn\'t my responsibility.', demeanor: 'Controlled, professional' },
                    'The cargo disappeared once it reached storage. You coordinated with someone inside.': { answer: 'I\'m a driver. I deliver cargo. Once I hand it off, my job is done.', demeanor: 'Dismissive, suspicious' },
                    'We know you\'ve been contacted by Volkov family members. They offered you $5 million.': { answer: '... I want a lawyer.', demeanor: 'Immediate shutdown - proves involvement' },
                    'You provided security specifications to whoever planned this. You gave them everything they needed.': { answer: '*Stares ahead* I\'m not saying another word. Get me my attorney.', demeanor: 'Complete silence, clearly guilty, shows no concern' }
                }
            },
            { 
                name: 'Katherine Price', 
                role: 'Customs Inspector', 
                motive: 'Blackmailed by Volkov family. Her daughter needs leukemia treatment ($1.2 million). Volkov offered to cover costs.',
                background: 'Customs inspector for 8 years. Struggling with medical debt. Single parent.',
                alibi: 'Claims she was home.',
                interrogationResponses: {
                    'You knew the contents of the shipment and its value.': { answer: 'I process many shipments. I don\'t memorize each one\'s details.', demeanor: 'Evasive' },
                    'Your daughter\'s leukemia treatment costs $1.2 million. You\'re behind on payments. Volkov offered to cover it.': { answer: '*Eyes fill with tears* How do you... yes. They knew about Emma. They said if I cooperated, they\'d pay for everything.', demeanor: 'Breaks down, emotional' },
                    'You provided security procedures to Leo Santos. You helped plan the theft.': { answer: 'They said no one would get hurt. They said they just needed information. My daughter... I couldn\'t let her die.', demeanor: 'Crying, clearly coerced and desperate' },
                    'What information did you provide to the Volkovs?': { answer: 'Security schedule, tracking device locations, customs procedures, the night guard assignments. But I didn\'t steal anything. I just gave information. I needed to save my daughter.', demeanor: 'Confesses to conspiracy, motivated by love of child, clearly manipulated' }
                }
            },
            { 
                name: 'Marcus Webb', 
                role: 'Port Foreman', 
                motive: 'His son owes $300k to organized crime. Volkov threatened to kill him if Marcus didn\'t cooperate.',
                background: 'Port foreman for 10 years. Son in trouble with gamblers and criminals.',
                alibi: 'Was managing operations as usual.',
                interrogationResponses: {
                    'Your son borrowed money from Volkov\'s organization. He owes $300,000.': { answer: 'My boy made a mistake. He\'s trying to pay it back. But we\'re struggling.', demeanor: 'Defensive about family' },
                    'Volkov told you he\'d forgive the debt if you helped with the theft. You controlled facility access.': { answer: 'No. No, I would never. I love my son, but I wouldn\'t commit a federal crime for him.', demeanor: 'Seems genuine' },
                    'You modified access procedures that night. We have security records.': { answer: 'Those modifications weren\'t me. Check with IT. I didn\'t touch the system.', demeanor: 'Truthful - wasn\'t him' },
                    'Where is your son right now?': { answer: 'He\'s... working. Safe. The Volkov people said if I cooperated, they\'d keep him alive. They said my cooperation was the payment for his debt.', demeanor: 'Realization dawning - he was threatened for his son but didn\'t directly participate' }
                }
            }
        ],
        correctSuspect: 1,
        reveal: 'Leo Santos, the FBI informant, was turned by the Volkov family. They approached him with a $5 million offer - a fortune he couldn\'t refuse. He coordinated the entire heist: providing security specifications, planning the timing, and ensuring the cargo disappeared cleanly. He worked with Katherine Price (blackmailed through her sick daughter) and Andrea Mercer\'s compromised credentials to execute the theft perfectly. The $50 million shipment is already in Volkov\'s hands, divided between them: $5 million to Leo, $2 million promised to Katherine for her daughter\'s treatment (though that payment will likely never come), and the remaining $43 million to Viktor Volkov\'s organization. Marcus Webb\'s son was used as leverage to keep everyone quiet - threatened with death if anyone talked. As Leo is arrested, he smirks and tells you: "You can arrest me, but the shipment\'s gone. Viktor owns it now. And Viktor owns a lot more than you can imagine. He owns judges, cops, politicians. Your brother? He\'s already dead. Accept it and move on." This message is chilling - it confirms larger forces at play. The Volkov organization is systematically taking over Vice Harbor\'s institutions.'
    },

    {
        id: 5,
        title: 'FINDING KAITO',
        number: 'CASE #5 - FINAL INVESTIGATION',
        date: 'DAY 5 • DAWN',
        briefing: `All the cases connect. Victor Chen (theft), Jack Mitchell (journalist murder), Dmitri Volkov (factory sabotage), Leo Santos (art heist) - they\'re all connected to one organization. The Volkov family. Four cases, four connections to organized crime, and now you have evidence that your brother Kaito - the investigative journalist who discovered this conspiracy - is alive. He\'s being held at Volkov compound in the industrial district. This is it. The final case. The final confrontation.`,
        location: 'Volkov Family Compound - Industrial District',
        victim: 'Your Brother - Kaito Hakita',
        timeOfDeath: 'Unknown - Status: Believed Alive',
        sceneItems: [
            { 
                name: 'Torture Cell with Tally Marks', 
                description: 'Underground cell with scratch marks on the walls - tally marks counting days. Evidence someone has been imprisoned here a long time.',
                forensicAnalysis: 'The cell has been occupied for approximately 4-5 months based on tally count of 147 marks. Water and food containers show minimal nutrition - someone kept alive but barely. DNA evidence found on cot matches Kaito Hakita perfectly. Blood stains on walls and floor show evidence of repeated beatings. Medical supplies and restraint marks suggest professional torture conducted to extract information.',
                connections: [
                    'Kaito has been here since he disappeared',
                    '147 days matches his disappearance timeline',
                    'Professional torture suggests interrogation for information',
                    'Viktor Volkov personally supervised interrogations based on handwriting'
                ]
            },
            { 
                name: 'Interrogation Equipment & Records', 
                description: 'Medical instruments, syringes, restraints, and handwritten interrogation logs.',
                forensicAnalysis: 'Medical analysis shows sophisticated torture techniques designed to extract information without causing permanent damage - professional work by someone with medical knowledge. Syringes contain traces of pentobarbital (sedative) - suggests enhanced interrogation. Interrogation logs are handwritten with questions like "Who else knows?", "How far did you spread the files?", "Who did you contact?". The handwriting matches Viktor Volkov\'s known samples.',
                connections: [
                    'Viktor Volkov personally conducted interrogations',
                    'Questions focus on who knew about the conspiracy',
                    'They were searching for copies of Kaito\'s investigation files',
                    'Torture stopped 3 weeks ago - suggests they gave up or prepared for execution'
                ]
            },
            { 
                name: 'Security Files Vault', 
                description: 'Locked vault containing folders documenting 12 years of criminal activity.',
                forensicAnalysis: 'The vault contains 500+ files documenting systematic corruption: 34 police officers on payroll, 18 judges bribed, 22 politicians controlled, 15 federal agents turned. The operation is massive. At the top of the file structure is a red folder labeled "THE COUNCIL" - suggesting an elite group above the Volkovs. The files show connections to Russian intelligence, Italian organized crime families, and corrupt government agencies.',
                connections: [
                    'Viktor Volkov is just the visible head - The Council runs actual operations',
                    'Federal judges on payroll - explains Mitchell\'s protection',
                    'Police officers compromised - explains investigation obstacles',
                    'Kaito discovered this structure - that\'s why they had to kill him'
                ]
            },
            { 
                name: 'Personal Effects & Recording Device', 
                description: 'Kaito\'s watch stopped at 11:47 PM, your childhood puzzle box, and a hidden recording device.',
                forensicAnalysis: 'Kaito\'s watch stopped at 11:47 PM - the exact time he was kidnapped from his apartment. The puzzle box is your shared childhood symbol - Viktor kept it to use as psychological torture. The recording device is hidden in the cell walls, containing audio files of interrogations spanning 4 months. One file is labeled "For my brother" dated today.',
                connections: [
                    'Watch confirms kidnapping time',
                    'Puzzle box confirms Viktor knew about the brothers\' connection',
                    'Recording device contains Viktor\'s confessions and interrogation methods',
                    'Kaito never gave up - recorded everything as insurance'
                ]
            }
        ],
        suspects: [
            { 
                name: 'Viktor Volkov', 
                role: 'Crime Family Boss - The Visible Head', 
                motive: 'Kaito discovered the entire criminal operation including The Council\'s existence', 
                background: 'Controls the Volkov crime family for 25 years. Answers to "The Council" - a shadow organization above him.',
                alibi: 'No alibi possible - he\'s at the compound',
                interrogationResponses: {
                    'Your handwriting appears in the torture logs. You personally interrogated my brother.': { answer: 'The boy was stubborn. I admire that. He had a gift for investigation - like you. But he knew too much.', demeanor: 'Cold, unapologetic, almost respectful' },
                    'Did you torture Kaito Hakita for the past four months?': { answer: 'Interrogate, torture - such harsh words. We had conversations. One-sided conversations because he refused to cooperate. But we tried to be reasonable.', demeanor: 'Smug, sadistic, shows pride in cruelty' },
                    'The Council. Kaito found your files. He knew about The Council.': { answer: '*Eyes narrow dangerously* Your brother was smarter than I gave him credit. Yes, he discovered The Council. That\'s why we couldn\'t let him live. That information must never leave this room.', demeanor: 'Momentary concern, then controlled, terrifying' },
                    'Where is Kaito now? Is he alive?': { answer: 'That depends. Do you come alone, or with FBI backup? My orders are... conditional on certain assurances. Your brother\'s life depends on how this conversation goes.', demeanor: 'Threatening, using brother as leverage, shows he\'s following orders from above' }
                }
            },
            { 
                name: 'Lena Volkov', 
                role: 'Viktor\'s Sister - Operations Director', 
                motive: 'Smarter than Viktor. Controls the actual criminal operations. Wants to expand empire - Kaito\'s investigation threatened growth', 
                background: 'Actually the brains of the organization. Controls day-to-day operations and intelligence network. Reports to The Council.',
                alibi: 'Found in command center - definitely at compound',
                interrogationResponses: {
                    'You\'re the operational mastermind. Viktor just takes orders from you.': { answer: 'Viktor is the public face. I prefer to work quietly. Your brother eventually understood that - took some convincing, though.', demeanor: 'Calculated, intelligent, hints at her torture' },
                    'The files show you planned the corruption of federal agents. That\'s treason.': { answer: 'Labels like "treason" are for people who believe in the system. We don\'t believe the system works. We made it work for us.', demeanor: 'Ideological, dangerous, shows contempt for law' },
                    'What did you do with Kaito?': { answer: 'What we had to do. He was going to expose everything. That couldn\'t happen. He\'s still alive - for now. Whether he stays that way depends on your cooperation.', demeanor: 'Matter-of-fact, terrifying, uses brother as hostage' },
                    'Who is "The Council"? Who gave you the order to kill my brother?': { answer: '*Long, calculated pause* You\'re not ready to know that. And if I tell you, people far more dangerous than me will come for you - and your brother. Some doors, once opened, can\'t be closed.', demeanor: 'Genuine fear shows for first time - indicates higher authority she\'s afraid of' }
                }
            },
            { 
                name: 'Detective James Miller', 
                role: 'Corrupt Police Officer - The Inside Man', 
                motive: 'Protected the family in exchange for payments. Kaito\'s investigation exposed his corruption and threatened his freedom', 
                background: 'Corrupt for 15 years. Takes regular payments from Volkov organization. Senior detective rank gives him access to all investigations.',
                alibi: 'Arrested arriving at compound',
                interrogationResponses: {
                    'You fed the Volkovs information about your own investigations. You warned them about Kaito.': { answer: 'I did what I had to do. They owned me. Completely. I couldn\'t say no. They had photographs, recordings... everything.', demeanor: 'Broken, defeated, shows signs of coercion' },
                    'You\'re the one who allowed them to catch Kaito. You provided his address and schedule.': { answer: '*Face goes white* They said they just wanted to talk to him. To convince him to stop the investigation. They promised me they wouldn\'t hurt him. I didn\'t think...', demeanor: 'Realizes horror of what he did, guilt consuming him' },
                    'Kaito is dead because of you. Because you betrayed him.': { answer: '*Breaks down completely* I know. God, I know. I\'ve been trying to get out for years but they wouldn\'t let me. If I didn\'t comply, they\'d kill my family. I\'m sorry. I\'m so sorry.', demeanor: 'Suicidal guilt, clearly coerced and trapped' },
                    'What do you know about "The Council"?': { answer: 'They\'re real. Higher than the Volkovs. Higher than anyone. Viktor and Lena answer to them. So did I. That\'s all I know. That\'s all anyone knows who wants to live. Please, don\'t ask about them.', demeanor: 'Terrified, shows that The Council is feared even by criminals' }
                }
            },
            { 
                name: 'The Accountant (Marcus Chen)', 
                role: 'Money Laundering Specialist', 
                motive: 'Protects financial operation worth billions. Kaito\'s investigation threatened the entire money movement system', 
                background: 'Manages billions in criminal proceeds. Harvard MBA. Controls Swiss accounts and offshore operations.',
                alibi: 'Found in financial records room trying to destroy evidence',
                interrogationResponses: {
                    'You laundered billions through legitimate businesses. Kaito found your tracks.': { answer: 'Your brother was thorough. I\'ll give him that. He traced the money through shell companies we\'d hidden for years. But the evidence is gone now.', demeanor: 'Arrogant, detached from human cost' },
                    'You authorized torture facilities. Medical bills show you paid for equipment.': { answer: 'I manage finances. I don\'t make decisions about... personnel matters. Those decisions come from above me.', demeanor: 'Trying to distance self from violence, shows he reports to someone' },
                    'Where did the money go? Billions of dollars - where is it?': { answer: 'Scattered across the world. Dozens of accounts. Switzerland, Singapore, Dubai, Moscow, Beijing. It\'s safe. We\'re safe. The Council ensures safety.', demeanor: 'Proud of operation, then realizes he mentioned The Council, becomes nervous' },
                    'If Kaito\'s files went public, your operation collapses.': { answer: 'That\'s why they couldn\'t. And that\'s why you won\'t leave this compound alive. The Council won\'t allow it. They\'ve already made the decision.', demeanor: 'Cold threat, reveals that Kaito\'s fate and yours is already decided by higher authority' }
                }
            }
        ],
        correctSuspect: 0,
        reveal: `Viktor Volkov is arrested, but his final words chill you to your core: "You caught the wrong man. I'm nothing. Just a manager. The Council... they're the real power. They watched this whole operation from above. I was just a puppet."

As the FBI raids the compound, sirens blaring outside, you race to the basement cells. Your hands shake as you unlock the final door.

Kaito is there. Alive. Beaten, malnourished, barely conscious - but alive. His eyes focus on you slowly, and for a moment there's confusion. Then recognition. Then tears.

"You came," he whispers, his voice barely audible from months of abuse.

In his trembling hand, he clutches the recording device. On it are months of Viktor's confessions, interrogation recordings, and most importantly - information about "The Council."

As you carry him toward the ambulance, he grabs your arm with surprising strength: "They told me everything. During interrogation. Trying to break me. The Council... it goes higher than the FBI. Federal judges, senators, generals. It's a shadow government. It controls everything in this city. And now they know about you."

The sirens continue to wail as the reality hits you: Solving your brother's case was just the beginning. The real fight - exposing The Council - will be far more dangerous. You've made powerful enemies. Enemies who operate above the law. Enemies who control the very institutions meant to protect you.

As you ride to the hospital with Kaito, your phone buzzes. An anonymous message appears: "You should have left it alone. We're watching. And we always collect our debts."

The game ends. But the investigation continues. The Council is still out there. And they know your name.`
    }
];
