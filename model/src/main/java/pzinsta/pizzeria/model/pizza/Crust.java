package pzinsta.pizzeria.model.pizza;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import pzinsta.pizzeria.model.Constants;
import pzinsta.pizzeria.model.MonetaryAmountAttributeConverter;

@Entity
public class Crust {
    @Id
    @GeneratedValue(generator = Constants.ID_GENERATOR)
	private Long id;
    
    @Size(max = 100)
    @NotNull
    @Column(unique = true)
	private String name;
	
    // TODO: needs mapping
    @NotNull
	@Convert(converter = MonetaryAmountAttributeConverter.class)
	private MonetaryAmount price;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public MonetaryAmount getPrice() {
		return price;
	}

	public void setPrice(MonetaryAmount cost) {
		this.price = cost;
	}
}