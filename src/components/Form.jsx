import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import schema from "../schemas/user";
import { useEffect } from "react";

export default function Form({ user, setUser, onSubmit, sectors, id }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: user,
  });

  useEffect(() => {
    setValue("name", user.name);
    setValue("sectors", user.sectors);
    setValue("is_agree_terms", user.is_agree_terms);
  }, [user, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>* Name</label>
      <input
        type="text"
        className="form-control"
        {...register("name")}
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      {errors.name?.message && !isValid && (
        <p className="text-danger">{errors.name.message}</p>
      )}
      <br />
      <label>* Select Sectors</label>
      <select
        multiple
        size="5"
        className="form-select"
        {...register("sectors")}
        value={user.sectors}
        onChange={(e) =>
          setUser({
            ...user,
            sectors: Array.from(
              e.target.selectedOptions,
              (option) => option.value
            ),
          })
        }
      >
        {sectors.map((parentSector) => (
          <optgroup key={parentSector.id} label={`${parentSector.name}`}>
            {parentSector.sectors?.map((childSector) => (
              <option key={childSector.id} value={`${childSector.name}`}>
                {childSector.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {errors.sectors?.message && !isValid && (
        <p className="text-danger">{errors.sectors.message}</p>
      )}
      <br />
      <label>
        <input
          type="checkbox"
          className="form-check-input"
          checked={user.is_agree_terms}
          onChange={(e) =>
            setUser({ ...user, is_agree_terms: e.target.checked })
          }
        />{" "}
        Agree to terms
      </label>
      <br />
      <br />
      <input
        type="submit"
        value={id === undefined ? "Save" : "Update"}
        className="btn btn-outline-primary"
      />
    </form>
  );
}
