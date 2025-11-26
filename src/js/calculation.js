import skills from '../data/synthesis.json' with { type: 'json' };

export class calculateSynthesis {
    constructor(lineage, archetype, lineageCount) {
        this.lineage = lineage;
        this.archetype = archetype;
        this.lineageCount = lineageCount;
        // console.log('Calculating synthesis for:', lineage, archetype, lineageCount);
    }

    test() {
        console.log(this.lineage);
        console.log(this.archetype);
        console.log(this.lineageCount);
        console.log('Loaded synthesis data:', skills);
    }

    calculateSynthesis(){
        this.lineageCount[this.lineage] -= 1;
        console.log('Adjusted lineage counts:', this.lineageCount);

        // dictionary of all skills in archetype
        console.log('Loaded synthesis data:', skills);
        const possibleSkills = skills[this.lineage][this.archetype];
        //console.log('Possible skills for', this.lineage, this.archetype, possibleSkills);

        const synthesizedSkills = [];
        // Checking each skill in archetype
        for (const skillKey in possibleSkills) {
            const skill = possibleSkills[skillKey];
            const requirements = skill['count'];
            for (const reqLineage in requirements) {
                if (this.lineageCount[reqLineage] >= requirements[reqLineage]) {
                    console.log(`Skill ${skillKey} can be synthesized.`);
                    synthesizedSkills.push(skills[this.lineage][this.archetype][skillKey]);
                }
            }
        }

        console.log('Synthesized Skills:', synthesizedSkills);
        return synthesizedSkills;

    }
    
}