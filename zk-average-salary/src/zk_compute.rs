use create_type_spec_derive::CreateTypeSpec;
use pbc_zk::*;

#[allow(unused)]
const SALARY_VARIABLE_KIND: u8 = 0u8;

#[derive(CreateTypeSpec, SecretBinary)]
pub struct ZKInput {
    pub salary: Sbi32,
    pub gender_choice: Sbi8,
}

#[derive(CreateTypeSpec, SecretBinary)]
pub struct ZkOutput {
    pub gender_counts: GenderCounts,
    pub salary_averages: SalaryAverages,
}

#[derive(CreateTypeSpec, SecretBinary)]
pub struct SalaryAverages {
    pub male: Sbi32,
    pub female: Sbi32,
    pub other: Sbi32,
}

#[derive(CreateTypeSpec, SecretBinary)]
pub struct GenderCounts {
    pub male: Sbi32,
    pub female: Sbi32,
    pub other: Sbi32,
}

/// Perform a zk computation on secret-shared data sum the secret variables.
///
/// ### Returns:
///
/// The sum of the secret variables - Computes the average salaries, based on gender
#[zk_compute(shortname = 0x61)]
pub fn sum_everything() -> ZkOutput {
    // Initialize state
    let mut salary_averages = [Sbi32::from(0); 3];
    let mut gender_count = [Sbi32::from(0); 3];

    // Sum each variable
    for variable_id in secret_variable_ids() {
        if load_metadata::<u8>(variable_id) == SALARY_VARIABLE_KIND {
            let input = load_sbi::<ZKInput>(variable_id);

            for idx in 0usize..3usize {
                if input.gender_choice == Sbi8::from((idx + 1usize) as i8) {
                    salary_averages[idx] = salary_averages[idx] + input.salary;
                    gender_count[idx] = gender_count[idx] + Sbi32::from(1);
                }
            }
        }
    }

    ZkOutput {
        salary_averages: SalaryAverages {
            male: salary_averages[0],
            female: salary_averages[1],
            other: salary_averages[2],
        },
        gender_counts: GenderCounts {
            male: gender_count[0],
            female: gender_count[1],
            other: gender_count[2],
        },
    }
}
